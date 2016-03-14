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
 * NFC view module.
 */
define({
    name: 'views/nfc',
    requires: [
        'views/tapAndPay',
        'helpers/list',
        'helpers/page'
    ],
    def: function nfcDefine(req) {
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
             * NFC toggle element.
             * @type {HTMLElement}
             */
            nfcToggleElement = null,

            /**
             * Tap and pay element.
             * @type {HTMLElement}
             */
            nfcTapAndPay = null,

            /**
             * Current nfc state.
             * @type {boolean}
             */
            currentValue = true;

        /**
         * Returns current value of nfc state.
         * @return {boolean}
         */
        function getCurrentValue() {
            return currentValue;
        }

        /**
         * Sets status of the tap and pay element.
         */
        function setTapAndPayStatus() {
            if (currentValue) {
                nfcTapAndPay.classList.remove('disabled');
            } else {
                nfcTapAndPay.classList.add('disabled');
            }
        }

        /**
         * Handles "change" event.
         * @param {Event} ev
         */
        function onNfcToggleElementChanged(ev) {
            currentValue = ev.target.checked;
            setTapAndPayStatus();
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            nfcToggleElement.checked = currentValue;
            setTapAndPayStatus();
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            nfcToggleElement.addEventListener('change',
                onNfcToggleElementChanged);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('nfc');
            nfcToggleElement = page.querySelector('#nfc-toggle');
            nfcTapAndPay = page.querySelector('#nfc-tap-and-pay');
            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init,
            getCurrentValue: getCurrentValue
        };
    }
});
