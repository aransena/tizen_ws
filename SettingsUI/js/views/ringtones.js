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

/*global define, document, tau, history */

/**
 * Ringtones view module.
 */

define({
    name: 'views/ringtones',
    requires: [
        'helpers/list',
        'helpers/dom',
        'helpers/page'
    ],
    def: function ringtonesDefine(req) {
        'use strict';

        /**
         * List helper module instance.
         * @type {Module}
         */
        var listHelper = req.helpers.list,

            /**
             * DOM helper module.
             * @type {Module}
             */
            domHelper = req.helpers.dom,

            /**
             * Page helper module instance.
             * @type {Module}
             */
            pageHelper = req.helpers.page,

            /**
             * Current ringtone name.
             * @type {string}
             */
            currentValue = 'Wine Glass',

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null;

        /**
         * Handles click on the list.
         * @param {Event} ev
         */
        function onListClick(ev) {
            var item = domHelper.closest(ev.target, 'li');

            if (!item) {
                return;
            }

            item = item.querySelector('input');
            currentValue = item.getAttribute('value');
        }

        /**
         * Returns currently selected ringtone name.
         * @return {string}
         */
        function getCurrentValue() {
            return currentValue;
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            page.querySelector('[value="' + currentValue + '"]').checked = true;
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            page.querySelector('ul').addEventListener('click', onListClick);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('ringtones');

            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init,
            getCurrentValue: getCurrentValue
        };
    }
});
