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
 * Gesture view module.
 */
define({
    name: 'views/gesture',
    requires: [
        'helpers/list',
        'helpers/popup',
        'helpers/page'
    ],
    def: function gesture(req) {
        'use strict';

        /**
         * List helper module instance.
         * @type {Module}
         */
        var listHelper = req.helpers.list,

            /**
             * Popup helper module instance.
             * @type {Module}
             */
            popupHelper = req.helpers.popup,

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
             * Wake up gesture input.
             * @type {HTMLElement}
             */
            wakeUpGestureInput = null,

            /**
             * Current style value.
             * @type {boolean}
             */
            currentValue = false;

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
        function wakeUpGestureInputChange(ev) {
            currentValue = ev.target.checked;
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            wakeUpGestureInput.checked = currentValue;
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            wakeUpGestureInput.addEventListener(
                'change',
                wakeUpGestureInputChange
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('gesture');
            wakeUpGestureInput = page.querySelector('#wake-up-gesture-input');

            bindEvents();

            listHelper.animate(page);
            listHelper.marquee(page.querySelector('.ui-listview'));
            popupHelper.resetScrollBeforeOpen(
                page.querySelector('#gesture-help-popup')
            );
        }

        return {
            init: init,
            getCurrentValue: getCurrentValue
        };
    }
});
