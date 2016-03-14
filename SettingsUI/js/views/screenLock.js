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
 * Screen lock view module.
 */

define({
    name: 'views/screenLock',
    requires: [
        'views/screenLockChoice',
        'helpers/list',
        'helpers/popup',
        'helpers/page'
    ],
    def: function screenLockDefine(req) {
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
             * Screen lock choice view module.
             * @type {Module}
             */
            screenLockChoiceView = req.views.screenLockChoice,

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
            page.querySelector('#screen-lock-value')
                .innerText = screenLockChoiceView.getCurrentValue();
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
            page = document.getElementById('screen-lock');

            bindEvents();

            listHelper.animate(page);
            popupHelper.resetScrollBeforeOpen(
                page.querySelector('#screen-lock-help')
            );
        }

        return {
            init: init
        };
    }
});
