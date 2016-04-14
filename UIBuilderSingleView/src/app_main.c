#include "app_main.h"
#include "uib_views.h"
#include <elm_app.h>



/* app event callbacks */
static bool _on_create_cb(void *user_data);
static void _on_terminate_cb(void *user_data);
static void _on_app_control_cb(app_control_h app_control, void *user_data);
static void _on_resume_cb(void *user_data);
static void _on_pause_cb(void *user_data);

Eina_Bool _rotary_handler_cb(void *data, Eext_Rotary_Event_Info *ev); // function prototype

app_data *app_create()
{
	base_scale_set();

	return calloc(1, sizeof(app_data));
}

void app_destroy(app_data *app)
{
	app_data *ad = app;
	eext_rotary_object_event_callback_del(ad->btnRef,_rotary_handler_cb);
	//eext_rotary_event_handler_del(_rotary_handler_cb);
	free(app);
}

int app_run(app_data *app, int argc, char **argv)
{
	dlog_print(DLOG_VERBOSE, LOG_TAG, "App Start");
	ui_app_lifecycle_callback_s cbs =
	{
		.create = _on_create_cb,
		.terminate = _on_terminate_cb,
		.pause = _on_pause_cb,
		.resume = _on_resume_cb,
		.app_control = _on_app_control_cb,
	};

	app_event_handler_h handlers[5] =
	{NULL, };

	return ui_app_main(argc, argv, &cbs, app);
}

void
app_get_resource(const char *edj_file_in, char *edj_path_out, int edj_path_max)
{
	char *res_path = app_get_resource_path();
	if (res_path) {
		snprintf(edj_path_out, edj_path_max, "%s%s", res_path, edj_file_in);
		free(res_path);
	}
}

Eina_Bool _rotary_handler_cb(void *data, Eext_Rotary_Event_Info *ev) {

	app_data *ad = data;
	//dlog_print(DLOG_VERBOSE, "APP", "Here");
	if (ev->direction == EEXT_ROTARY_DIRECTION_CLOCKWISE) {
		dlog_print(DLOG_VERBOSE, "APP", "ROTARY HANDLER: Rotary device rotated in clockwise direction");

	}
	else {
		dlog_print(DLOG_VERBOSE, "APP", "Rotary device rotated in counter clockwise direction");
		}
	//uib_view1_view_context* vc = calloc(1, sizeof(uib_view1_view_context));
	dlog_print(DLOG_VERBOSE, "APP", "%s", ad->btnRef);

	//evas_object_smart_callback_call(ad->btnRef,"pressed",NULL);
	return EINA_FALSE;
}


static bool _on_create_cb(void *user_data)
{
	app_data *ad=user_data;
	Evas_Object *slider = ad->btnRef;
	//eext_rotary_object_event_callback_add(slider,_rotary_handler_cb,ad);
	eext_rotary_object_event_activated_set(slider, EINA_TRUE);
	//eext_rotary_event_handler_add(_rotary_handler_cb, user_data);
	dlog_print(DLOG_VERBOSE, "APP", "There Now");

	//app_data *ad = user_data;

	win_create(ad);
	uib_view1_view_context* vc = startup_view_create(ad);
	ad->btnRef = vc->controlButton;
	ad->btnRef=vc->circleslider1;
	return true;
}

static void _on_terminate_cb(void *user_data)
{
	app_data *ad = user_data;
	eext_rotary_event_handler_del(_rotary_handler_cb);
	win_destroy(ad->win);
	ad->win = NULL;
}

static void _on_resume_cb(void *user_data)
{
	/* Take necessary actions when application becomes visible. */
}

static void _on_pause_cb(void *user_data)
{
	/* Take necessary actions when application becomes invisible. */
}

static void _on_app_control_cb(app_control_h app_control, void *user_data)
{
	/* Handle the launch request. */
}

