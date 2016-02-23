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

/*global define, tau, document, console*/
/*jslint plusplus: true*/

/**
 * Module exitPopup
 */

define({
    name: 'views/popup',
    requires: [
        'core/event',
        'core/systeminfo',
        'core/application',
        'core/template'
    ],
    def: function popup(req) {
        'use strict';
        var e = req.core.event,
            sysInfo = req.core.systeminfo,
            template = req.core.template,
            app = req.core.application;


        /**
         * Creates html element with popup.
         * @param {string} msg
         * @return {HTMLElement}
         */
        function createPopup(msg) {
            var popupElement = null,
                popupElementCon = document.createElement('div');

            popupElement = template.get('popup', {
                msg: msg
            });
            popupElementCon.innerHTML = popupElement;
            popupElement = popupElementCon.firstElementChild;
            return popupElement;
        }

        /**
         * Handles click event on exit popup OK button.
         */
        function onExitPopupOkClick() {
            tau.closePopup();
        }

        /**
         * Handles popuphide event on popup element.
         */
        function onPopupHide() {
            sysInfo.getSystemProperty(
                'BATTERY',
                function onValue(battery) {
                    if (!battery.isCharging) {
                        e.fire('battery.charger.off');
                        return;
                    }
                    app.exit();
                },
                function onError() {
                    return;
                }
            );
        }

        /**
         * Binds exit popup events.
         * @param {HTMLElement} popupElement
         */
        function bindExitPopupEvents(popupElement) {
            var alertOk = popupElement.querySelector('.alert-ok');
            popupElement.addEventListener('popuphide', onPopupHide);
            alertOk.addEventListener('click', onExitPopupOkClick);

        }

        /**
         * Opens exit popup.
         * @param {string} msg
         */
        function openExitPopup(msg) {
            var popupElement = createPopup(msg),
                activePage = document.querySelector('.ui-page-active');

            bindExitPopupEvents(popupElement);
            activePage.appendChild(popupElement);
            tau.openPopup(popupElement);
        }

        return {
            openExitPopup: openExitPopup
        };
    }
});
