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

/*global define, tau, window, document*/

/**
 * Page helper module.
 */
define({
    name: 'helpers/page',
    requires: [],
    def: function pageHelper() {
        'use strict';

        /**
         * Indicates whether history back occurs.
         * @type {boolean}
         */
        var historyBack = false;

        /**
         * Handles popstate event on window element.
         */
        function onWindowPopstate() {
            historyBack = true;
        }

        /**
         * Handles pageshow event on document element.
         */
        function onPageShow() {
            historyBack = false;
        }

        /**
         * Resets scroll position of the given page.
         * @param {HTMLElement} page
         */
        function resetScroll(page) {
            if (!historyBack) {
                page.querySelector('.ui-scroller').scrollTop = 0;
            }
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            window.addEventListener('popstate', onWindowPopstate, true);
            document.addEventListener('pageshow', onPageShow);
        }

        /**
         * Initializes module.
         */
        function init() {
            bindEvents();
        }

        return {
            init: init,
            resetScroll: resetScroll
        };
    }
});
