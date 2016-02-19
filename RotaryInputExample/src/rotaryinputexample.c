#include "rotaryinputexample.h"

typedef struct appdata {
	Evas_Object *win;
	Evas_Object *conform;
	Evas_Object *label;
} appdata_s;

static void
win_delete_request_cb(void *data, Evas_Object *obj, void *event_info)
{
	ui_app_exit();
}

static void
win_back_cb(void *data, Evas_Object *obj, void *event_info)
{
	appdata_s *ad = data;
	/* Let window go to hide state. */
	elm_win_lower(ad->win);
}



Eina_Bool _rotary_handler_cb(void *data, Eext_Rotary_Event_Info *ev)
{
	Evas_Object *bg = data;
   if (ev->direction == EEXT_ROTARY_DIRECTION_CLOCKWISE)
   {
      dlog_print(DLOG_DEBUG, LOG_TAG, "ROTARY HANDLER: Rotary device rotated in clockwise direction");
      elm_bg_color_set(bg, rand() % (255 + 1 - 0), 255, rand() % (65 + 1 - 0));
   }
   else
   {
      dlog_print(DLOG_DEBUG, LOG_TAG, "Rotary device rotated in counter clockwise direction");
      elm_bg_color_set(bg, rand() % (65 + 1 - 0),rand() % (255 + 1 - 0), 255);
   }

   return EINA_FALSE;
}



static void
create_base_gui(appdata_s *ad)
{
	Evas_Object *win = NULL, *bg= NULL;

	   // Window
	ad->win = elm_win_util_standard_add(NULL, "extension circle sample");
   elm_win_autodel_set(win, EINA_TRUE);
   evas_object_smart_callback_add(ad->win, "delete,request", win_delete_request_cb, NULL);
   eext_object_event_callback_add(ad->win, EEXT_CALLBACK_BACK, win_back_cb, ad);

   // Register the rotary event handler


   // Show the window after base gui is set up
   evas_object_show(ad->win);

   bg = elm_bg_add(ad->win);
   elm_bg_color_set(bg, 0xFF, 0x00, 0x00);
   elm_win_resize_object_add(ad->win, bg);
   evas_object_show(bg);

   eext_rotary_event_handler_add(_rotary_handler_cb, bg);
}


static bool
app_create(void *data)
{
	/* Hook to take necessary actions before main event loop starts
		Initialize UI resources and application's data
		If this function returns true, the main loop of application starts
		If this function returns false, the application is terminated */
	appdata_s *ad = data;

	create_base_gui(ad);

	return true;
}

static void
app_control(app_control_h app_control, void *data)
{
	/* Handle the launch request. */
}

static void
app_pause(void *data)
{
	/* Take necessary actions when application becomes invisible. */
}

static void
app_resume(void *data)
{
	/* Take necessary actions when application becomes visible. */
}

static void
app_terminate(void *data)
{
	/* Release all resources. */
	eext_rotary_event_handler_del(_rotary_handler_cb);
}

static void
ui_app_lang_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LANGUAGE_CHANGED*/
	char *locale = NULL;
	system_settings_get_value_string(SYSTEM_SETTINGS_KEY_LOCALE_LANGUAGE, &locale);
	elm_language_set(locale);
	free(locale);
	return;
}

static void
ui_app_orient_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_DEVICE_ORIENTATION_CHANGED*/
	return;
}

static void
ui_app_region_changed(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_REGION_FORMAT_CHANGED*/
}

static void
ui_app_low_battery(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LOW_BATTERY*/
}

static void
ui_app_low_memory(app_event_info_h event_info, void *user_data)
{
	/*APP_EVENT_LOW_MEMORY*/
}

int
main(int argc, char *argv[])
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
		dlog_print(DLOG_ERROR, LOG_TAG, "app_main() is failed. err = %d", ret);
	}

	return ret;
}
