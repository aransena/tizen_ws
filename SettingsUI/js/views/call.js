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
 * Call view module.
 */
define({
    name: 'views/call',
    requires: [
        'helpers/list',
        'helpers/popup',
        'helpers/page',
        'views/callForwarding'
    ],
    def: function call(req) {
        'use strict';

        /**
         * Page element.
         * @type {HTMLElement}
         */
        var page = null,

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
             * Voice control element.
             * @type {HTMLElement}
             */
            voiceControl = null,

            /**
             * Voice control popup element.
             * @type {HTMLElement}
             */
            voiceControlPopup = null,

            /**
             * Voice control popup ok button.
             * @type {HTMLElement}
             */
            voiceControlPopupOkBtn = null,

            /**
             * Voice control toggle switch element.
             * @type {HTMLElement}
             */
            voiceControlToggleSwitch = null,

            /**
             * Voice control input element.
             * @type {HTMLElement}
             */
            voiceControlInput = null,

            /**
             * List helper module instance.
             * @type {Module}
             */
            listHelper = req.helpers.list;

        /**
         * Handles click event on watch always on element.
         */
        function onVoiceControlClick() {
            if (voiceControlInput.checked) {
                voiceControlToggleSwitch.click();
            } else {
                tau.openPopup(voiceControlPopup);
            }
        }

        /**
         * Handles click event on voice control popup ok button.
         */
        function onVoiceControlPopupOkBtnClick() {
            voiceControlToggleSwitch.click();
        }

        /**
         * Handles click event on toggle switch element.
         * @param {Event} e
         */
        function onVoiceControlToggleSwitchClick(e) {
            e.stopPropagation();
        }

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

            voiceControl.addEventListener('click', onVoiceControlClick);
            voiceControlToggleSwitch.addEventListener(
                'click',
                onVoiceControlToggleSwitchClick
            );
            voiceControlPopupOkBtn.addEventListener(
                'click',
                onVoiceControlPopupOkBtnClick
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('call');

            voiceControl = document.getElementById('voice-control');
            voiceControlPopup = document.getElementById(
                'voice-control-popup'
            );
            voiceControlPopupOkBtn = document.getElementById(
                'voice-control-popup-ok-btn'
            );
            voiceControlToggleSwitch = document.querySelector(
                '#voice-control .ui-toggleswitch'
            );
            voiceControlInput = document.getElementById(
                'voice-control-input'
            );

            bindEvents();

            listHelper.animate(page);
            popupHelper.resetScrollBeforeOpen(voiceControlPopup);
        }

        return {
            init: init
        };
    }
});
