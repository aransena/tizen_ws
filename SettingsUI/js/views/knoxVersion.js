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

/*global define, document, tau*/

/**
 * Knox version view module.
 */
define({
    name: 'views/knoxVersion',
    requires: [
        'helpers/list',
        'helpers/page'
    ],
    def: function knoxVersion(req) {
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
            page = null;

        /**
         * Handles pagebeforeshow event page element.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('knox-version');

            bindEvents();

            listHelper.animate(page);
        }

        return {
            init: init
        };
    }
});
