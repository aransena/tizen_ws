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

/*global define, document, tau */

/**
 * Wi-Fi view module.
 */
define({
    name: 'views/wifi',
    requires: [
        'views/wifiNetworks',
        'helpers/list',
        'helpers/page'
    ],
    def: function wifiDefine(req) {
        'use strict';

        /**
         * List helper module instance.
         * @type {Module}
         */
        var listHelper = req.helpers.list,

            /**
             * Page helper module instance.
             * @type {Module}
             */
            pageHelper = req.helpers.page,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null,

            /**
             * Wi-Fi toggle element.
             * @type {HTMLElement}
             */
            wifiToggleElement = null,

            /**
             * Wi-Fi network option element.
             * @type {HTMLElement}
             */
            wifiNetworksOption = null,

            /**
             * The flag that indicates whether the wifi is on.
             * @type {boolean}
             */
            turnedOn = false,

            /**
             * Disabled class;
             * @type {string}
             */
            DISABLED_CLASS = 'disabled';

        /**
         * Returns information about the wifi state.
         * @return {boolean}
         */
        function isTurnedOn() {
            return turnedOn;
        }

        /**
         * Handles "change" event.
         * @param {Event} ev
         */
        function onWifiToggleElementChanged(ev) {
            turnedOn = ev.target.checked;
            if (turnedOn) {
                wifiNetworksOption.classList.remove(DISABLED_CLASS);
            } else {
                wifiNetworksOption.classList.add(DISABLED_CLASS);
            }
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            wifiToggleElement.checked = turnedOn;
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            wifiToggleElement.addEventListener('change',
                onWifiToggleElementChanged);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('wifi');
            wifiToggleElement = page.querySelector(
                '#wifi-toggle'
            );
            wifiNetworksOption = page.querySelector(
                '#wifi-networks-option'
            );
            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init,
            isTurnedOn: isTurnedOn
        };
    }
});
