/*
 * Copyright (c) 2014 Samsung Electronics Co., Ltd. All rights reserved.
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

/*global define, console, window, document*/

/**
 * Init page module.
 * @requires {@link core/event}
 * @requires {@link core/application}
 * @requires {@link core/systeminfo}
 * @requires {@link Altimeter/views/main}
 * @namespace Altimeter/views/init
 * @memberof Altimeter/views
 */
define({
    name: 'views/init',
    requires: [
        'core/event',
        'core/application',
        'core/systeminfo',
        'views/main'
    ],
    def: function viewsInitPage(req) {
        'use strict';

        /**
         * Core event module.
         * @type {Module}
         */
        var e = req.core.event,

            /**
             * Core application module.
             * @type {Module}
             */
            app = req.core.application,

            /**
             * Core systeminfo module.
             * @type {Module}
             */
            sysInfo = req.core.systeminfo;

        /**
         * Registers view event listeners.
         */
        function bindEvents() {
            document.addEventListener('tizenhwkey', function onTizenhwkey(e) {
                if (e.keyName === 'back') {
                    app.exit();
                }
            });
            sysInfo.listenBatteryLowState();
        }

        /**
         * Handles the core.battery.low event.
         */
        function onLowBattery() {
            app.exit();
        }

        /**
         * Handles the core.battery.checked state.
         */
        function onBatteryChecked() {
            e.fire('device.ready');
        }

        /**
         * Initializes the module.
         * @memberof Altimeter/views/init
         */
        function init() {
            bindEvents();
            sysInfo.checkBatteryLowState();
        }

        e.listeners({
            'core.systeminfo.battery.low': onLowBattery,
            'core.systeminfo.battery.checked': onBatteryChecked
        });

        return {
            init: init
        };
    }

});
