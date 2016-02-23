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
#include "log.h"

static void _hour_selected_cb(void *data, Evas *e, Evas_Object *obj, void *event_info)
{
	appdata_s *ad = data;

	_D("Hour selected");

	ad->selected = obj;

	elm_object_signal_emit(obj, "hour_selected", "hour");
	elm_object_signal_emit(ad->minute_ly, "minute_deselected", "minute");
	elm_object_signal_emit(ad->second_ly, "second_deselected", "second");
}

static void _minute_selected_cb(void *data, Evas *e, Evas_Object *obj, void *event_info)
{
	appdata_s *ad = data;

	_D("Minute selected");

	ad->selected = obj;

	elm_object_signal_emit(obj, "minute_selected", "minute");
	elm_object_signal_emit(ad->hour_ly, "hour_deselected", "hour");
	elm_object_signal_emit(ad->second_ly, "second_deselected", "second");
}

static void _second_selected_cb(void *data, Evas *e, Evas_Object *obj, void *event_info)
{
	appdata_s *ad = data;

	_D("Second selected");

	ad->selected = obj;

	elm_object_signal_emit(obj, "second_selected", "second");
	elm_object_signal_emit(ad->hour_ly, "hour_deselected", "hour");
	elm_object_signal_emit(ad->minute_ly, "minute_deselected", "minute");
}

void digital_create(appdata_s *ad)
{
	_D("Digital create");
	Evas_Object *left_col = NULL;
	Evas_Object *right_col = NULL;

	ad->hour_ly = elm_layout_add(ad->win);
	ret_if(!ad->hour_ly);
	elm_layout_file_set(ad->hour_ly, ad->timer_edj_path, "hour");
	evas_object_event_callback_add(ad->hour_ly, EVAS_CALLBACK_MOUSE_DOWN, _hour_selected_cb, ad);
	elm_object_part_content_set(ad->layout, "hour", ad->hour_ly);
	elm_object_part_text_set(ad->hour_ly, "val", "00");
	evas_object_show(ad->hour_ly);

	ad->minute_ly = elm_layout_add(ad->win);
	ret_if(!ad->minute_ly);
	elm_layout_file_set(ad->minute_ly, ad->timer_edj_path, "minute");
	evas_object_event_callback_add(ad->minute_ly, EVAS_CALLBACK_MOUSE_DOWN, _minute_selected_cb, ad);
	elm_object_part_content_set(ad->layout, "minute", ad->minute_ly);
	elm_object_part_text_set(ad->minute_ly, "val", "00");
	evas_object_show(ad->minute_ly);

	ad->second_ly = elm_layout_add(ad->win);
	ret_if(!ad->second_ly);
	elm_layout_file_set(ad->second_ly, ad->timer_edj_path, "second");
	evas_object_event_callback_add(ad->second_ly, EVAS_CALLBACK_MOUSE_DOWN, _second_selected_cb, ad);
	elm_object_part_content_set(ad->layout, "second", ad->second_ly);
	elm_object_part_text_set(ad->second_ly, "val", "00");
	evas_object_show(ad->second_ly);

	left_col = elm_image_add(ad->win);
	ret_if(!left_col);
	elm_image_file_set(left_col, ad->timer_control_dot_path, NULL);
	evas_object_size_hint_weight_set(left_col, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
	evas_object_size_hint_align_set(left_col, EVAS_HINT_FILL, EVAS_HINT_FILL);
	elm_object_part_content_set(ad->layout, "left_colon", left_col);

	right_col = elm_image_add(ad->win);
	ret_if(!right_col);
	elm_image_file_set(right_col, ad->timer_control_dot_path, NULL);
	evas_object_size_hint_weight_set(right_col, EVAS_HINT_EXPAND, EVAS_HINT_EXPAND);
	evas_object_size_hint_align_set(right_col, EVAS_HINT_FILL, EVAS_HINT_FILL);
	elm_object_part_content_set(ad->layout, "right_colon", right_col);
}

void digital_destroy(appdata_s *ad)
{
	Evas_Object *left_col = NULL;
	Evas_Object *right_col = NULL;
	Evas_Object *hour = NULL;
	Evas_Object *minute = NULL;
	Evas_Object *second = NULL;

	left_col = elm_object_part_content_unset(ad->layout, "left_colon");
	ret_if(!left_col);
	evas_object_del(left_col);

	right_col = elm_object_part_content_unset(ad->layout, "right_colon");
	ret_if(!right_col);
	evas_object_del(right_col);

	hour = elm_object_part_content_unset(ad->layout, "hour");
	ret_if(!hour);
	evas_object_del(hour);
	ad->hour_ly = NULL;

	minute = elm_object_part_content_unset(ad->layout, "minute");
	ret_if(!minute);
	evas_object_del(minute);
	ad->minute_ly = NULL;

	second = elm_object_part_content_unset(ad->layout, "second");
	ret_if(!second);
	evas_object_del(second);
	ad->second_ly = NULL;
}
