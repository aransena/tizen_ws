/*
 * Samsung API
 * Copyright (c) 2009-2015 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/license/
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include <tizen.h>

#include "main.h"
#include "rotary.h"
#include "digital.h"
#include "log.h"

void main_get_resource_path(appdata_s *ad)
{
	static char *res_path_buff = NULL;

	if (res_path_buff == NULL) {
		res_path_buff = app_get_resource_path();
	}

	snprintf(ad->timer_edj_path, MAX_PATH_LEN, "%s%s", res_path_buff, TIMER_EDJ);
	snprintf(ad->timer_control_dot_path, MAX_PATH_LEN, "%s%s", res_path_buff, CONTROL_DOT);

	_D("Timer edj path: %s", ad->timer_edj_path);
	_D("Timer control dot path: %s", ad->timer_control_dot_path);
}

static void win_delete_request_cb(void *data , Evas_Object *obj , void *event_info)
{
	ui_app_exit();
}

static void layout_back_cb(void *data, Evas_Object *obj, void *event_info)
{
	ret_if(!data);

	appdata_s *ad = data;
	/* Let window go to hide state. */
	elm_win_lower(ad->win);
}

static Evas_Object *_win_create(appdata_s *ad)
{
	Evas_Object *win = NULL;

	retv_if(!ad, NULL);

	win = elm_win_util_standard_add(PACKAGE, PACKAGE);
	elm_win_autodel_set(win, EINA_TRUE);

	if (elm_win_wm_rotation_supported_get(win)) {
		int rots[4] = { 0, 90, 180, 270 };
		elm_win_wm_rotation_available_rotations_set(win, (const int *)(&rots), 4);
	}

	evas_object_smart_callback_add(win, "delete, request", win_delete_request_cb, NULL);

	elm_win_screen_size_get(win, NULL, NULL, &ad->screen_width, &ad->screen_height);
	_D("Screen width: %d, height: %d", ad->screen_width, ad->screen_height);

	evas_object_show(win);

	return win;
}

static void _win_destroy(appdata_s *ad)
{
	Evas_Object *win = NULL;

	win = ad->win;
	ret_if(!win);
	evas_object_del(win);
	ad->win = NULL;
}

static Evas_Object *_conformant_create(appdata_s *ad)
{
	Evas_Object *conform = NULL;

	retv_if(!ad, NULL);

	conform = elm_conformant_add(ad->win);
	retv_if(!conform, NULL);

	elm_win_indicator_mode_set(ad->win, ELM_WIN_INDICATOR_HIDE);
	elm_win_indicator_opacity_set(ad->win, ELM_WIN_INDICATOR_OPAQUE);
	evas_object_size_hint_weight_set(conform, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
	elm_win_resize_object_add(ad->win, conform);
	evas_object_show(conform);

	return conform;
}

static void _conformant_destroy(appdata_s *ad)
{
	Evas_Object *conform = NULL;

	conform = ad->conform;
	ret_if(!conform);
	evas_object_del(conform);
	ad->conform = NULL;
}

static Eina_Bool _timer_start_cb(void *data)
{
	appdata_s *ad = data;
	int post_second_time = 0;
	int post_minute_time = 0;
	int post_hour_time = 0;
	char *hour_val = NULL;
	char *minute_val = NULL;
	char *second_val = NULL;
	char buf[256] = { 0, };
	const char *pre_second_time = NULL;
	const char *pre_minute_time = NULL;
	const char *pre_hour_time = NULL;
	_D("Timer is start");

	if (ad->setting_time == 0) {
		if (ad->timer) {
			_D("Timer is Stopped");
			ecore_timer_del(ad->timer);
			ad->timer = NULL;
			elm_object_signal_emit(ad->start_btn_ly, "timer_end", "btn");
			elm_object_signal_emit(ad->layout, "timer_end", "bg");
			/* wav play & vibration */
			/* timer_play_effect(); */
		}
		return ECORE_CALLBACK_CANCEL;
	}
	_D("Remind time: %d", ad->setting_time);

	pre_second_time = elm_object_part_text_get(ad->second_ly, "val");
	post_second_time = atoi(pre_second_time);
	pre_minute_time = elm_object_part_text_get(ad->minute_ly, "val");
	post_minute_time = atoi(pre_minute_time);
	pre_hour_time = elm_object_part_text_get(ad->hour_ly, "val");
	post_hour_time = atoi(pre_hour_time);

	if (post_second_time == 0) {
		if (post_minute_time == 0) {
			post_second_time = 59;
			post_minute_time = 59;
			post_hour_time = post_hour_time - 1;
		} else {
			post_second_time = 59;
			post_minute_time = post_minute_time - 1;
		}
	} else {
		post_second_time = post_second_time - 1;
	}

	snprintf(buf, sizeof(buf), "%02d", post_hour_time);
	hour_val = strdup(buf);
	snprintf(buf, sizeof(buf), "%02d", post_minute_time);
	minute_val = strdup(buf);
	snprintf(buf, sizeof(buf), "%02d", post_second_time);
	second_val = strdup(buf);

	elm_object_part_text_set(ad->hour_ly, "val", hour_val);
	elm_object_part_text_set(ad->minute_ly, "val", minute_val);
	elm_object_part_text_set(ad->second_ly, "val", second_val);

	ad->setting_time--;

	free(hour_val);
	free(minute_val);
	free(second_val);

	return ECORE_CALLBACK_RENEW;
}

static Eina_Bool _progress_start_cb(void *data)
{
	_D("Start clicked");
	appdata_s *ad = data;
	char buf[256] = { 0, };
	char *sig_num = NULL;
	int temp = 0;

	if (ad->img_num == 0) {
		elm_object_signal_emit(ad->layout, "timer_end", "progress");
		ecore_timer_del(ad->progress_timer);
		ad->progress_timer = NULL;

		return ECORE_CALLBACK_CANCEL;
	}

	temp = (int)ad->img_num;
	snprintf(buf, sizeof(buf), "starting_%d", temp);
	sig_num = strdup(buf);

	elm_object_signal_emit(ad->layout, sig_num, "progress");

	ad->img_num--;

	free(sig_num);

	return ECORE_CALLBACK_RENEW;
}

static int _calc_setting_time(appdata_s *ad)
{
	int post_second_time = 0;
	int post_minute_time = 0;
	int post_hour_time = 0;
	int setting_time = 0;
	const char *pre_second_time = NULL;
	const char *pre_minute_time = NULL;
	const char *pre_hour_time = NULL;

	pre_second_time = elm_object_part_text_get(ad->second_ly, "val");
	post_second_time = atoi(pre_second_time);
	pre_minute_time = elm_object_part_text_get(ad->minute_ly, "val");
	post_minute_time = atoi(pre_minute_time);
	pre_hour_time = elm_object_part_text_get(ad->hour_ly, "val");
	post_hour_time = atoi(pre_hour_time);

	setting_time = post_second_time + (post_minute_time*60) + (post_hour_time*3600);
	_D("Setting time is %d", setting_time);

	return setting_time;
}

static void _reset_clicked_cb(appdata_s *ad)
{
	ad->setting_time = 0;

	ecore_timer_del(ad->timer);
	ad->timer = NULL;
	ecore_timer_del(ad->progress_timer);
	ad->progress_timer = NULL;

	elm_object_part_text_set(ad->hour_ly, "val", "00");
	elm_object_part_text_set(ad->minute_ly, "val", "00");
	elm_object_part_text_set(ad->second_ly, "val", "00");
	elm_object_signal_emit(ad->start_btn_ly, "timer_end", "btn");
	elm_object_signal_emit(ad->layout, "timer_end", "bg");
	elm_object_signal_emit(ad->layout, "timer_end", "progress");
}

static void _start_clicked_cb(void *data, Evas_Object *obj, void *event_info)
{
	appdata_s *ad = data;
	double progress_count = 0;
	_D("Start clicked");

	if (ad->timer) {
		_reset_clicked_cb(ad);
		return;
	}
	ad->setting_time = _calc_setting_time(ad);
	ret_if(!ad->setting_time);

	ad->img_num = 60;

	progress_count = (ad->setting_time/ad->img_num);
	ad->selected = NULL;

	elm_object_signal_emit(ad->hour_ly, "hour_deselected", "hour");
	elm_object_signal_emit(ad->minute_ly, "minute_deselected", "minute");
	elm_object_signal_emit(ad->second_ly, "second_deselected", "second");

	elm_object_signal_emit(ad->start_btn_ly, "timer_start", "btn");
	elm_object_signal_emit(ad->layout, "timer_start", "bg");

	ad->timer = ecore_timer_add(1.0f, _timer_start_cb, ad);
	ret_if(!ad->timer);
	ad->progress_timer = ecore_timer_add(progress_count, _progress_start_cb, ad);
	ret_if(!ad->progress_timer);
	_progress_start_cb(ad);
}

static void _start_btn_create(appdata_s *ad)
{
	ad->start_btn_ly = elm_layout_add(ad->win);
	ret_if(!ad->start_btn_ly);
	elm_layout_file_set(ad->start_btn_ly, ad->timer_edj_path, "start_btn");
	elm_object_part_content_set(ad->layout, "start_button", ad->start_btn_ly);
	evas_object_show(ad->start_btn_ly);

	ad->start_btn = elm_image_add(ad->start_btn_ly);
	ret_if(!ad->start_btn);
	evas_object_size_hint_weight_set(ad->start_btn, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
	evas_object_size_hint_align_set(ad->start_btn, EVAS_HINT_FILL, EVAS_HINT_FILL);
	elm_object_part_content_set(ad->start_btn_ly, "btn", ad->start_btn);
	evas_object_smart_callback_add(ad->start_btn, "clicked", _start_clicked_cb, ad);
}

static void _start_btn_destroy(appdata_s *ad)
{
	Evas_Object *start_btn = NULL;
	Evas_Object *start_btn_ly = NULL;

	start_btn = elm_object_part_content_unset(ad->start_btn_ly, "btn");
	ret_if(!start_btn);
	evas_object_del(start_btn);
	ad->start_btn = NULL;

	start_btn_ly = elm_object_part_content_unset(ad->layout, "start_button");
	ret_if(!start_btn_ly);
	evas_object_del(start_btn_ly);
	ad->start_btn_ly = NULL;
}

static Evas_Object *_layout_create(appdata_s *ad)
{
	_D("Layout create");
	Evas_Object *layout = NULL;

	retv_if(!ad, NULL);

	layout = elm_layout_add(ad->win);
	retv_if(!layout, NULL);

	main_get_resource_path(ad);

	elm_layout_file_set(layout, ad->timer_edj_path, GRP_MAIN);
	evas_object_size_hint_weight_set(layout, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
	eext_object_event_callback_add(layout, EEXT_CALLBACK_BACK, layout_back_cb, ad);

	elm_object_content_set(ad->conform, layout);
	ad->layout = layout;

	_start_btn_create(ad);
	retv_if(!ad->start_btn, NULL);

	digital_create(ad);

	rotary_init(ad);

	evas_object_show(layout);


	return layout;
}

static void _layout_destroy(appdata_s *ad)
{
	Evas_Object *layout = NULL;

	layout = elm_object_content_unset(ad->conform);
	ret_if(!layout);
	evas_object_del(layout);
	ad->layout = NULL;
}

static bool app_create(void *data)
{
	/* Hook to take necessary actions before main event loop starts
	   Initialize UI resources and application's data
	   If this function returns true, the main loop of application starts
	   If this function returns false, the application is terminated */
	appdata_s *ad = data;

	/* Window */
	ad->win = _win_create(ad);
	retv_if(!ad->win, false);

	/* Conformant */
	ad->conform = _conformant_create(ad);
	retv_if(!ad->conform, false);

	/* Base Layout */
	_layout_create(ad);
	retv_if(!ad->layout, false);

	return true;
}

static void app_control(app_control_h app_control, void *data)
{
	/* Handle the launch request. */
}

static void app_pause(void *data)
{
	/* Take necessary actions when application becomes invisible. */
}

static void app_resume(void *data)
{
	/* Take necessary actions when application becomes visible. */
}

static void app_terminate(void *data)
{
	/* Release all resources */
	appdata_s *ad = data;

	rotary_destroy(ad);
	digital_destroy(ad);
	_start_btn_destroy(ad);
	_layout_destroy(ad);
	_conformant_destroy(ad);
	_win_destroy(ad);
}

static void ui_app_lang_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LANGUAGE_CHANGED*/
	char *locale = NULL;
	system_settings_get_value_string(SYSTEM_SETTINGS_KEY_LOCALE_LANGUAGE, &locale);
	elm_language_set(locale);
	free(locale);
	return;
}

static void ui_app_orient_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_DEVICE_ORIENTATION_CHANGED*/
	return;
}

static void ui_app_region_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_REGION_FORMAT_CHANGED*/
}

static void ui_app_low_battery(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LOW_BATTERY*/
}

static void ui_app_low_memory(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LOW_MEMORY*/
}

int main(int argc, char *argv[])
{
	appdata_s ad = {0,};
	int ret = 0;

	ui_app_lifecycle_callback_s event_callback = {0,};
	app_event_handler_h handlers[5] = {NULL, };

	event_callback.create = app_create;
	event_callback.terminate = app_terminate;
	event_callback.pause = app_pause;
	event_callback.resume = app_resume;
	event_callback.app_control = app_control;

	ui_app_add_event_handler(&handlers[APP_EVENT_LOW_BATTERY], APP_EVENT_LOW_BATTERY, ui_app_low_battery, &ad);
	ui_app_add_event_handler(&handlers[APP_EVENT_LOW_MEMORY], APP_EVENT_LOW_MEMORY, ui_app_low_memory, &ad);
	ui_app_add_event_handler(&handlers[APP_EVENT_DEVICE_ORIENTATION_CHANGED], APP_EVENT_DEVICE_ORIENTATION_CHANGED, ui_app_orient_changed, &ad);
	ui_app_add_event_handler(&handlers[APP_EVENT_LANGUAGE_CHANGED], APP_EVENT_LANGUAGE_CHANGED, ui_app_lang_changed, &ad);
	ui_app_add_event_handler(&handlers[APP_EVENT_REGION_FORMAT_CHANGED], APP_EVENT_REGION_FORMAT_CHANGED, ui_app_region_changed, &ad);
	ui_app_remove_event_handler(handlers[APP_EVENT_LOW_MEMORY]);

	ret = ui_app_main(argc, argv, &event_callback, &ad);
	if (ret != APP_ERROR_NONE) {
		_E("ui_app_main() is failed. err = %d", ret);
	}

	return ret;
}
