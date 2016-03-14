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
 * Tap and pay view module.
 */
define({
    name: 'views/tapAndPay',
    requires: [
        'helpers/page'
    ],
    def: function tapAndPayDefine(pageHelper) {
        'use strict';

        /**
         * Page element.
         * @type {HTMLElement}
         */
        var page = null;

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            page.querySelector('.ui-scroller').setAttribute(
                'tizen-circular-scrollbar', ''
            );
            pageHelper.resetScroll(page);
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
            page = document.getElementById('tap-and-pay');
            bindEvents();
        }

        return {
            init: init
        };
    }
});
