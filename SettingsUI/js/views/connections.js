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
 * Connections view module.
 */
define({
    name: 'views/connections',
    requires: [
        'views/bluetooth',
        'views/mobileNetworks',
        'views/wifi',
        'views/nfc',
        'helpers/list',
        'helpers/page'
    ],
    def: function connections(req) {
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
             * Bluetooth view module.
             * @type {Module}
             */
            bluetoothView = req.views.bluetooth,

            /**
             * Wi-fi view module.
             * @type {Module}
             */
            wifiView = req.views.wifi,

            /**
             * NFC view module.
             * @type {Module}
             */
            nfcView = req.views.nfc,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null;

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            page.querySelector('#bluetooth-value')
                .innerText = bluetoothView.getCurrentValue() ? 'On' : 'Off';
            page.querySelector('#wifi-value')
                .innerText = wifiView.isTurnedOn() ? 'On' : 'Off';
            page.querySelector('#nfc-value')
                .innerText = nfcView.getCurrentValue() ? 'On' : 'Off';
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('connections');
            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init
        };
    }
});
