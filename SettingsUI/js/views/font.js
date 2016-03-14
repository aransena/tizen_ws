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

/*global define, document, tau, console*/

/**
 * Font view module.
 */

define({
    name: 'views/font',
    requires: [
        'views/fontStyle',
        'views/fontSize',
        'helpers/list',
        'helpers/page'
    ],
    def: function font(req) {
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
             * Font style view module.
             * @type {Module}
             */
            fontStyleView = req.views.fontStyle,

            /**
             * Font size view module.
             * @type {Module}
             */
            fontSizeView = req.views.fontSize,

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
            page.querySelector('#font-style-value')
                .innerText = fontStyleView.getCurrentValue();
            page.querySelector('#font-size-value')
                .innerText = fontSizeView.getCurrentValue();
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
            page = document.getElementById('font');

            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init
        };
    }
});
