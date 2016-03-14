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
 * Call forwarding view module.
 */
define({
    name: 'views/callForwarding',
    requires: [
        'helpers/list',
        'helpers/popup',
        'helpers/page',
        'views/callForwardingMore'
    ],
    def: function callForwarding(req) {
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
             * Call forwarding auto element.
             * @type {HTMLElement}
             */
            callForwardingAuto = null,

            /**
             * Call forwarding auto popup element.
             * @type {HTMLElement}
             */
            callForwardingAutoPopup = null,

            /**
             * Call forwarding auto popup ok button.
             * @type {HTMLElement}
             */
            callForwardingAutoPopupOkBtn = null,

            /**
             * Call forwarding auto toggle switch element.
             * @type {HTMLElement}
             */
            callForwardingAutoToggleSwitch = null,

            /**
             * Call forwarding auto input element.
             * @type {HTMLElement}
             */
            callForwardingAutoInput = null;

        /**
         * Handles click event on call forwarding auto element.
         */
        function onCallForwardingAutoClick() {
            if (callForwardingAutoInput.checked) {
                callForwardingAutoToggleSwitch.click();
            } else {
                tau.openPopup(callForwardingAutoPopup);
            }
        }

        /**
         * Handles click event on call forwarding auto popup ok button.
         */
        function onCallForwardingAutoPopupOkBtnClick() {
            callForwardingAutoToggleSwitch.click();
        }

        /**
         * Handles click event on toggle switch element.
         */
        function onCallForwardingAutoToggleSwitchClick(e) {
            e.stopPropagation();
        }

        /**
         * Handles pagebeforeshow event page element.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
        }

        /**
         * Returns true if call forwarding to gear device is enabled,
         * false otherwise.
         * @return {boolean}
         */
        function isFwdToGearOn() {
            return callForwardingAutoInput.checked;
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            callForwardingAuto.addEventListener(
                'click',
                onCallForwardingAutoClick
            );
            callForwardingAutoToggleSwitch.addEventListener(
                'click',
                onCallForwardingAutoToggleSwitchClick
            );
            callForwardingAutoPopupOkBtn.addEventListener(
                'click',
                onCallForwardingAutoPopupOkBtnClick
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('call-forwarding');
            callForwardingAuto = document.getElementById(
                'call-forwarding-auto'
            );
            callForwardingAutoPopup = document.getElementById(
                'call-forwarding-auto-popup'
            );
            callForwardingAutoPopupOkBtn = document.getElementById(
                'call-forwarding-auto-popup-ok-btn'
            );
            callForwardingAutoToggleSwitch = document.querySelector(
                '#call-forwarding-auto .ui-toggleswitch'
            );
            callForwardingAutoInput = document.getElementById(
                'call-forwarding-auto-input'
            );

            bindEvents();

            listHelper.animate(page);
            popupHelper.resetScrollBeforeOpen(callForwardingAutoPopup);
        }

        return {
            init: init,
            isFwdToGearOn: isFwdToGearOn
        };
    }
});
