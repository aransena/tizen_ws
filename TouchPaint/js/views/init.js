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

/*global define, console, window, document, history, tizen*/

/**
 * Init page module
 */

define({
    name: 'views/init',
    requires: [
        'core/event',
        'core/application',
        'core/systeminfo',
        'views/main',
        'views/options',
        'views/popup'
    ],
    def: function viewsInit(req) {
        'use strict';

        var e = req.core.event,
            app = req.core.application,
            sysInfo = req.core.systeminfo,
            popup = req.views.popup,
            alreadyClosing = false;

        /**
         * Handles tizenhwkey event.
         * @param {event} ev
         */
        function onHardwareKeysTap(ev) {
            var keyName = ev.keyName,
                page = document.getElementsByClassName('ui-page-active')[0],
                pageId = page ? page.id : '';

            if (keyName === 'back') {
                if (pageId === 'main') {
                    app.exit();
                } else {
                    history.back();
                }
            }
        }

        /**
         * Handles visibilitychange event.
         */
        function onVisibilityChange() {
            e.fire('visibility.change');
        }

        /**
         * Handler onLowBattery state
         */
        function onLowBattery() {
            app.exit();
        }

        function exitIfCharging() {
            if (!alreadyClosing) {
                sysInfo.getSystemProperty(
                    'BATTERY',
                    function onValue(battery) {
                        if (!battery.isCharging) {
                            return;
                        }
                        alreadyClosing = true;
                        popup.openExitPopup(
                                'This application only runs without charger.' +
                                ' Please unplug your USB charger.'
                        );
                    },
                    function onError() {
                        return;
                    }
                );
            }
        }

        function addUSBListener() {
            tizen.systeminfo.addPropertyValueChangeListener(
                'BATTERY',
                function onValue(battery) {
                    if (battery.isCharging) {
                        exitIfCharging();
                    }
                }
            );
        }

        /**
         * Handler onBatteryChtrarger state
         */
        function onBatteryChargerOff() {
            alreadyClosing = false;
        }

        /**
         * Binds module event listeners.
         */
        function bindEvents() {
            window.addEventListener('tizenhwkey', onHardwareKeysTap);
            document.addEventListener('visibilitychange', onVisibilityChange);
            sysInfo.listenBatteryLowState();
            addUSBListener();
        }

        /**
         * Inits module.
         */
        function init() {
            bindEvents();
            sysInfo.checkBatteryLowState();
            exitIfCharging();
        }

        e.listeners({
            'core.systeminfo.battery.low': onLowBattery,
            'views.popup.battery.charger.off': onBatteryChargerOff
        });

        return {
            init: init
        };
    }

});
