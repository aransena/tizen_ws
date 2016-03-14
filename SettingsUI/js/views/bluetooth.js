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
 * Bluetooth view module.
 */
define({
    name: 'views/bluetooth',
    requires: [
        'views/bluetoothHeadset',
        'helpers/list',
        'helpers/page'
    ],
    def: function bluetooth(req) {
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
             * Bluetooth switch input.
             * @type {HTMLElement}
             */
            bluetoothSwitchInput = null,

            /**
             * Bluetooth headset option.
             * @type {HTMLElement}
             */
            bluetoothHeadsetOption = null,

            /**
             * Current style value.
             * @type {boolean}
             */
            currentValue = false,

            /**
             * Disabled class;
             * @type {string}
             */
            DISABLED_CLASS = 'disabled';

        /**
         * Returns current value of gesture.
         * @return {string}
         */
        function getCurrentValue() {
            return currentValue;
        }

        /**
         * Handles "change" event.
         * @param {Event} ev
         */
        function bluetoothSwitchChange(ev) {
            currentValue = ev.target.checked;
            if (currentValue) {
                bluetoothHeadsetOption.classList.remove(DISABLED_CLASS);
            } else {
                bluetoothHeadsetOption.classList.add(DISABLED_CLASS);
            }
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            bluetoothSwitchInput.checked = currentValue;
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            bluetoothSwitchInput.addEventListener(
                'change',
                bluetoothSwitchChange
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('bluetooth');
            bluetoothSwitchInput = page.querySelector(
                '#bluetooth-switch-input'
            );
            bluetoothHeadsetOption = page.querySelector(
                '#bluetooth-headset-option'
            );
            listHelper.animate(page);
            listHelper.marquee(page.querySelector('.ui-listview'));
            bindEvents();
        }

        return {
            init: init,
            getCurrentValue: getCurrentValue
        };
    }
});
