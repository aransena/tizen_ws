#include "main.h"

Eina_Bool _rotary_handler_cb(void *data, Eext_Rotary_Event_Info *ev); // function prototype


typedef struct appdata {
	Evas_Object *win;
	Evas_Object *bg;
	Evas_Object *conform;
	Evas_Object *label;
	int udpPort;
	struct addrinfo* res;
	bool connection;
	int speed;

	Evas_Coord x_down;
	Evas_Coord y_down;
	double time_down;

	Ecore_Timer *commsTimer;

	int interactionCnt;


	// Flag for checking the mouse down event
	Eina_Bool down;

	int swipeL;
	int swipeR;
	int swipeU;
	int swipeD;
	int bezelL;
	int bezelR;
	int tap;
	int longPress;

	int stop;
	int control;

} appdata_s;



static void win_delete_request_cb(void *data, Evas_Object *obj,
		void *event_info) {
	ui_app_exit();
}

static void reset_data(void *data) {
	appdata_s *ad = data;
	ad->control=1;
	//ad->stop=0;
	ad->bezelL=0;
	ad->bezelR=0;
	ad->swipeL=0;
	ad->swipeR=0;
	ad->swipeU=0;
	ad->swipeD=0;
	ad->tap=0;
	ad->longPress=0;
}

static void win_back_cb(void *data, Evas_Object *obj, void *event_info) {
	appdata_s *ad = data;
	/* Let window go to hide state. */
	elm_win_lower(ad->win);
}

static bool send_UDP(void *data) {
	//const char* content = "this is the message";
	bool outcome = false;
	appdata_s *ad = data;

	struct addrinfo* res = ad->res;

	char *str;
	str = (char *)malloc(23);
	int mode = 1;
	sprintf( str, "%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,%d,",ad->control,ad->stop,ad->bezelL,ad->bezelR,ad->swipeL,ad->swipeR,
				ad->swipeU,ad->swipeD,ad->tap,ad->longPress,mode);

	dlog_print(DLOG_DEBUG, LOG_TAG, "sending message: %s", str);

	if (sendto(ad->udpPort, str, 23, 0, res->ai_addr,
			res->ai_addrlen) == -1) {
		dlog_print(DLOG_DEBUG, LOG_TAG, "Error sending message: %s",
				strerror(errno));
	} else {
		dlog_print(DLOG_DEBUG, LOG_TAG, "Message sent %s", str);
		outcome = true;
	}

	reset_data(ad);

	return outcome;
}

static void app_terminate(void *data) {
	/* Release all resources. */
	eext_rotary_event_handler_del(_rotary_handler_cb);
	appdata_s *ad = data;

	int port = (int) ad->udpPort;
	close(port);

	if (!ad) {
		return;
	}
}

Eina_Bool _rotary_handler_cb(void *data, Eext_Rotary_Event_Info *ev) {

	appdata_s *ad = data;
	Evas_Object *bg = ad->bg;

	ad->interactionCnt=0;
	ad->stop = 0;

	dlog_print(DLOG_DEBUG, LOG_TAG, "ROTARY HANDLER: UDP port: ", ad->udpPort);

	if (ev->direction == EEXT_ROTARY_DIRECTION_CLOCKWISE) {
		dlog_print(DLOG_DEBUG, LOG_TAG,
				"ROTARY HANDLER: Rotary device rotated in clockwise direction");
		elm_bg_color_set(bg, rand() % (255 + 1 - 0), 255,
				rand() % (65 + 1 - 0));
		ad->bezelR = 1;

		/*if (send_UDP("CW,1 ", ad)) {
			dlog_print(DLOG_DEBUG, LOG_TAG,
					"ROTARY HANDLER: Clockwise UDP message sent");
		} else {
			app_terminate(ad);
		}*/

	} else {
		dlog_print(DLOG_DEBUG, LOG_TAG,
				"Rotary device rotated in counter clockwise direction");
		elm_bg_color_set(bg, rand() % (65 + 1 - 0), rand() % (255 + 1 - 0),
				255);

		ad->bezelL = 1;

		/*if (send_UDP("CCW,1", ad)) {
			dlog_print(DLOG_DEBUG, LOG_TAG,
					"ROTARY HANDLER: Counter Clockwise UDP message sent");
		} else {
			app_terminate(ad);
		}*/

	}

	ad->interactionCnt=0;

	return EINA_FALSE;
}

static void fingermove_down_cb(void *data, Evas *evas, Evas_Object *obj,
		void *event_info) {
	appdata_s *ad = data;
	ad->interactionCnt=0;

	Evas_Event_Mouse_Move *ev = event_info;
	Evas_Coord x = ev->cur.canvas.x;
	Evas_Coord y = ev->cur.canvas.y;

	ad->time_down = ecore_time_get(); //ev->timestamp;
	ad->x_down = x;
	ad->y_down = y;

	//dlog_print(DLOG_DEBUG, LOG_TAG,"FINGER DOWN HANDLER: timestamps %d, %f",ev->timestamp, ad->time_down);

	dlog_print(DLOG_DEBUG, LOG_TAG, "Finger Down Event");

}

static void fingermove_up_cb(void *data, Evas *evas, Evas_Object *obj,
		void *event_info) {
	appdata_s *ad = data;
	ad->interactionCnt=0;

	Evas_Event_Mouse_Move *ev = event_info;
	Evas_Coord x = ev->cur.canvas.x;
	Evas_Coord y = ev->cur.canvas.y;

	dlog_print(DLOG_DEBUG, LOG_TAG, "Mouse Move, %d, %d", x, y);
	double dt = ecore_time_get() - ad->time_down;

	if(abs(ad->x_down-x)>=100){
		if(ad->x_down<x){
			ad->swipeR=1;
			ad->stop=0;
		}
		else{
			ad->swipeL=1;
			ad->stop=0;
		}
	}
	else if(abs(ad->y_down-y)>=100){
		if(ad->y_down>y){
			ad->swipeU=1;
			ad->stop=1;
		}
		else{
			ad->swipeD=1;
			//ad->stop=0;
		}
	}
	else if(dt < 0.5){
		ad->tap = 1;
	}
	else if(dt >= 0.5){
			ad->longPress = 1;
	}
	else{} // else do nothing

	dlog_print(DLOG_DEBUG, LOG_TAG,"FINGER UP HANDLER: dt %f",dt);

	dlog_print(DLOG_DEBUG, LOG_TAG,"FINGER HANDLER: Finger UP message sent");

}

static void create_base_gui(appdata_s *ad) {
	Evas_Object *win = NULL, *bg = NULL;

	// Window
	ad->win = elm_win_util_standard_add(NULL, "extension circle sample");
	elm_win_autodel_set(win, EINA_TRUE);
	evas_object_smart_callback_add(ad->win, "delete,request",
			win_delete_request_cb, NULL);
	eext_object_event_callback_add(ad->win, EEXT_CALLBACK_BACK, win_back_cb,
			ad);

	// Register the rotary event handler

	// Show the window after base gui is set up
	evas_object_show(ad->win);

	bg = elm_bg_add(ad->win);
	elm_bg_color_set(bg, 0xFF, 0x00, 0x00);
	elm_win_resize_object_add(ad->win, bg);
	evas_object_show(bg);
	ad->bg = bg;
	eext_rotary_event_handler_add(_rotary_handler_cb, ad);
	evas_object_event_callback_add(bg, EVAS_CALLBACK_MOUSE_UP, fingermove_up_cb,
			ad);
	evas_object_event_callback_add(bg, EVAS_CALLBACK_MOUSE_DOWN, fingermove_down_cb,
				ad);

}

static void get_UDPsocket(const char* hostname, const char* portname,
		appdata_s *ad) {

	//const char* hostname="192.168.43.218"; /* localhost */
	//const char* portname="21234";

	struct addrinfo hints;
	memset(&hints, 0, sizeof(hints));
	hints.ai_family = AF_UNSPEC;
	hints.ai_socktype = SOCK_DGRAM;
	hints.ai_protocol = 0;
	hints.ai_flags = AI_ADDRCONFIG;

	struct addrinfo* res = 0;

	int err = getaddrinfo(hostname, portname, &hints, &res);

	if (err != 0) {
		dlog_print(DLOG_DEBUG, LOG_TAG,
				"failed to resolve remote socket address (err=%d)", err);
	} else {
		//ad->cw_cnt = 0;
		dlog_print(DLOG_DEBUG, LOG_TAG, "resolved remote socket address %s, %s",
				hostname, portname);
		ad->res = res;
	}

	int fd = socket(res->ai_family, res->ai_socktype, res->ai_protocol);

	if (fd == -1) {
		dlog_print(DLOG_DEBUG, LOG_TAG, "Error creating socket: %s",
				strerror(errno));
	} else {
		dlog_print(DLOG_DEBUG, LOG_TAG, "Socket created: %d", fd);
		ad->udpPort = fd;
		bool success = true;
		ad->connection = success;
	}

	dlog_print(DLOG_DEBUG, LOG_TAG, "get_UDPsocket: ", ad->udpPort);

	return;
}

Eina_Bool network_comms(void *data) {
	appdata_s *ad = data;

	send_UDP(ad);

	if (ad->interactionCnt>50){//if idle > 5 seconds
		ad->stop=1;
	}
	else{
		//ad->message="!!!!!"; // no message, just placeholder
		ad->interactionCnt=ad->interactionCnt + 1;
	}
	dlog_print(DLOG_DEBUG, LOG_TAG, "Timer Callback %d",ad->interactionCnt);
	return ECORE_CALLBACK_RENEW;
}



static bool app_create(void *data) {
	/* Hook to take necessary actions before main event loop starts
	 Initialize UI resources and application's data
	 If this function returns true, the main loop of application starts
	 If this function returns false, the application is terminated */
	appdata_s *ad = data;
	bool outcome = false;
	ad->connection = false;
	get_UDPsocket("192.168.43.218", "21234", ad);


	if (ad->connection) {
		dlog_print(DLOG_DEBUG, LOG_TAG, "app_create: udp connection success");
		create_base_gui(ad);
		outcome = true;
	} else {
		dlog_print(DLOG_DEBUG, LOG_TAG, "app_create: udp connection fail");
	}

	return outcome; // if udp port created successfully, outcome will be true and app will open, else will terminate
}

static void app_control(app_control_h app_control, void *data) {
	/* Handle the launch request. */
}

static void app_pause(void *data) {
	appdata_s *ad = data;

	ecore_timer_del(ad->commsTimer);
	ad->control=0;
	/* Take necessary actions when application becomes invisible. */
	if (send_UDP(ad)) {
		dlog_print(DLOG_DEBUG, LOG_TAG, "APP_PAUSE: Pause message sent");
	} else {
		app_terminate(ad);
	}

	dlog_print(DLOG_DEBUG, LOG_TAG, "APP_PAUSE: Pause message sent");

}

static void app_resume(void *data) {
	appdata_s *ad = data;
	ad->commsTimer = ecore_timer_add(0.1, network_comms,ad);

	/* Take necessary actions when application becomes visible. */
	/*if (send_UDP("STR,1", ad)) {
		dlog_print(DLOG_DEBUG, LOG_TAG, "APP_PAUSE: Start message sent");
	} else {
		app_terminate(ad);
	}*/

	ad->interactionCnt=0;
	dlog_print(DLOG_DEBUG, LOG_TAG, "APP_RESUME: Start message sent");

	ad->control=1;
	ad->stop=1;
	ad->bezelL=0;
	ad->bezelR=0;
	ad->swipeL=0;
	ad->swipeR=0;
	ad->swipeU=0;
	ad->swipeD=0;
	ad->tap=0;
	ad->longPress=0;

	dlog_print(DLOG_DEBUG, LOG_TAG, "APP_RESUME: UDP message set");

}

int main(int argc, char *argv[]) {
	appdata_s ad = { 0, };
	int ret = 0;
	dlog_print(DLOG_DEBUG, LOG_TAG, "app start");

	ui_app_lifecycle_callback_s event_callback = { 0, };

	event_callback.create = app_create;
	event_callback.terminate = app_terminate;
	event_callback.pause = app_pause;
	event_callback.resume = app_resume;
	event_callback.app_control = app_control;

    ret = ui_app_main(argc, argv, &event_callback, &ad);
	if (ret != APP_ERROR_NONE) {
		dlog_print(DLOG_ERROR, LOG_TAG, "app_main() is failed. err = %d", ret);
	}
	return ret;
}