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
#include <stdlib.h>

#include "main.h"
#include "log.h"

static char *_rotary_get_plus_value(appdata_s *ad)
{
	const char *pre_change_num = NULL;
	int post_change_num = 0;
	char buf[256] = {0, };
	char *val = NULL;

	pre_change_num = elm_object_part_text_get(ad->selected, "val");
	post_change_num = atoi(pre_change_num);

	if (post_change_num == 60) {
		_D("Timer reach to maximum, 60");
		val = strdup(pre_change_num);
		return val;
	}

	_D("Pre change num: %s", pre_change_num);
	_D("Post change num: %d", post_change_num);
	post_change_num = post_change_num + 1;

	if (post_change_num == 0) {
		snprintf(buf, sizeof(buf), "0%d", post_change_num);
		val = strdup(buf);
	} else {
		snprintf(buf, sizeof(buf), "%d", post_change_num);
		val = strdup(buf);
	}

	return val;
}

static char *_rotary_get_minus_value(appdata_s *ad)
{
	const char *pre_change_num = NULL;
	int post_change_num = 0;
	char buf[256] = {0, };
	char *val = NULL;

	pre_change_num = elm_object_part_text_get(ad->selected, "val");
	post_change_num = atoi(pre_change_num);

	if (post_change_num == 0) {
		_D("Timer reach to minimum, 0");
		val = strdup(pre_change_num);
		return val;
	}

	_D("Pre change num: %s", pre_change_num);
	_D("Post change num: %d", post_change_num);
	post_change_num = post_change_num - 1;

	if (post_change_num == 0) {
		snprintf(buf, sizeof(buf), "0%d", post_change_num);
		val = strdup(buf);
	} else {
		snprintf(buf, sizeof(buf), "%d", post_change_num);
		val = strdup(buf);
	}

	return val;
}

static Eina_Bool _rotary_cb(void *data, Evas_Object *obj, Eext_Rotary_Event_Info *rotary_info)
{
	char *val = NULL;

	_D("Rotary callback is called");

	appdata_s *ad = data;
	retv_if(!ad, ECORE_CALLBACK_PASS_ON);

	retv_if(!ad->selected, ECORE_CALLBACK_PASS_ON);

	retv_if(ad->timer, ECORE_CALLBACK_PASS_ON);

	_D("Detent detected, obj[%p], direction[%d], time_stamp[%u]", obj, rotary_info->direction, rotary_info->time_stamp);
	if (rotary_info->direction == EEXT_ROTARY_DIRECTION_CLOCKWISE) {
		val = _rotary_get_plus_value(ad);
		elm_object_part_text_set(ad->selected, "val", val);
	} else {
		val = _rotary_get_minus_value(ad);
		elm_object_part_text_set(ad->selected, "val", val);
	}

	free(val);

	return ECORE_CALLBACK_PASS_ON;
}

void rotary_init(appdata_s *ad)
{
	_D("Initialize the rotary event");
	eext_rotary_object_event_callback_add(ad->layout, _rotary_cb, ad);

	eext_rotary_object_event_activated_set(ad->layout, EINA_TRUE);
}

void rotary_destroy(appdata_s *ad)
{
	_D("Finish the rotary event");
	eext_rotary_object_event_callback_del(ad->layout, _rotary_cb);
}
