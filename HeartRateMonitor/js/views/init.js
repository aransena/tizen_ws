/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*global define, $, console, window, history, document, tau*/

/**
 * Init page module.
 * @requires {@link core/event}
 * @requires {@link core/systeminfo}
 * @requires {@link core/application}
 * @requires {@link views/main}
 * @requires {@link models/heartRate}
 * @namespace HeartRateMonitor/views/init
 * @memberof HeartRateMonitor/views
 */

define({
    name: 'views/init',
    requires: [
        'core/event',
        'core/systeminfo',
        'core/application',
        'views/main',
        'models/heartRate'
    ],
    def: function viewsPageInit(req) {
        'use strict';

        /**
         * Core event module object.
         * @type {Module}
         */
        var e = req.core.event,

            /**
             * Core application module object.
             * @type {Module}
             */
            app = req.core.application,

            /**
             * Core systeminfo module object.
             * @type {Module}
             */
            sysInfo = req.core.systeminfo,

            /**
             * Model heartRate module object.
             * @type {Module}
             */
            hr = req.models.heartRate;


        /**
         * Exit application.
         */
        function exit() {
            app.exit();
        }

        /**
         * Handles tizenhwkey event.
         * @param {event} ev
         */
        function onHardwareKeysTap(ev) {
            var keyName = ev.keyName,
                page = document.getElementsByClassName('ui-page-active')[0],
                pageid = page ? page.id : '';

            if (keyName === 'back') {
                if (pageid === 'main' || pageid === 'ajax-loader') {
                    hr.stop();
                    exit();
                } else {
                    history.back();
                }
            }
        }

        /**
         * Handles resize event.
         */
        function onWindowResize() {
            e.fire('window.resize', { height: window.innerHeight });
        }

        /**
         * Handler onLowBattery state
         */
        function onLowBattery() {
            if (document.getElementsByClassName('ui-page-active')[0].id ===
                'register') {
                e.fire('register.menuBack');
            }
            exit();
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            window.addEventListener('tizenhwkey', onHardwareKeysTap);
            window.addEventListener('resize', onWindowResize);
            sysInfo.listenBatteryLowState();
        }

        /**
         * Initializes module.
         * @memberof HeartRateMonitor/views/init
         */
        function init() {
            // bind events to page elements
            bindEvents();
            sysInfo.checkBatteryLowState();
        }

        e.on({
            'core.systeminfo.battery.low': onLowBattery
        });

        return {
            init: init
        };
    }

});
