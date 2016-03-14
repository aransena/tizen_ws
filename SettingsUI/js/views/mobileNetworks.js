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
 * Mobile networks view module.
 */
define({
    name: 'views/mobileNetworks',
    requires: [
        'views/mobileNetworksSwitch',
        'views/networkMode',
        'views/networkOperators',
        'helpers/list',
        'helpers/popup',
        'helpers/page'
    ],
    def: function mobileNetworks(req) {
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
             * Mobile networks switch view module.
             * @type {Module}
             */
            mobileNetworksSwitchView = req.views.mobileNetworksSwitch,

            /**
             * Network mode view module.
             * @type {Module}
             */
            networkModeView = req.views.networkMode,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null,

            /**
             * Mobile data switch element.
             * @type {HTMLElement}
             */
            mobileDataSwitch = null,

            /**
             * Mobile data switch on popup element.
             * @type {HTMLElement}
             */
            mobileDataSwitchOnPopup = null,

            /**
             * Mobile data switch off popup element.
             * @type {HTMLElement}
             */
            mobileDataSwitchOffPopup = null,

            /**
             * Mobile data switch on popup ok button.
             * @type {HTMLElement}
             */
            mobileDataSwitchOnPopupOkBtn = null,

            /**
             * Mobile data switch off popup ok button.
             * @type {HTMLElement}
             */
            mobileDataSwitchOffPopupOkBtn = null,

            /**
             * Mobile data toggle switch element.
             * @type {HTMLElement}
             */
            mobileDataToggleSwitch = null,

            /**
             * Mobile data switch input element.
             * @type {HTMLElement}
             */
            mobileDataSwitchInput = null,

            /**
             * Data roaming switch element.
             * @type {HTMLElement}
             */
            dataRoamingSwitch = null,

            /**
             * Data roaming switch popup element.
             * @type {HTMLElement}
             */
            dataRoamingSwitchPopup = null,

            /**
             * Data roaming switch popup ok button.
             * @type {HTMLElement}
             */
            dataRoamingSwitchPopupOkBtn = null,

            /**
             * Data roaming toggle switch element.
             * @type {HTMLElement}
             */
            dataRoamingToggleSwitch = null,

            /**
             * Data roaming switch input element.
             * @type {HTMLElement}
             */
            dataRoamingSwitchInput = null;

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            pageHelper.resetScroll(page);
            page.querySelector('#mobile-networks-value')
                .innerText = mobileNetworksSwitchView.getCurrentValue();
            page.querySelector('#network-mode-value')
                .innerText = networkModeView.getCurrentValue();
        }

        /**
         * Handles click event on mobile data switch element.
         */
        function onMobileDataSwitchClick() {
            if (mobileDataSwitchInput.checked) {
                tau.openPopup(mobileDataSwitchOffPopup);
            } else {
                tau.openPopup(mobileDataSwitchOnPopup);
            }
        }

        /**
         * Handles click event on mobile data toggle switch element.
         * @param {Event} e
         */
        function onMobileDataToggleSwitchClick(e) {
            e.stopPropagation();
        }

        /**
         * Handles click event on data roaming toggle switch element.
         * @param {Event} e
         */
        function onDataRoamingToggleSwitchClick(e) {
            e.stopPropagation();
        }

        /**
         * Handles click event on mobile data switch on popup ok button.
         */
        function onMobileDataSwitchPopupOkBtnClick() {
            mobileDataToggleSwitch.click();
        }

        /**
         * Handles click event on data roaming switch on popup ok button.
         */
        function onDataRoamingSwitchPopupOkBtnClick() {
            dataRoamingToggleSwitch.click();
        }

        /**
         * Handles click event on data roaming switch element.
         */
        function onDataRoamingSwitchClick() {
            if (dataRoamingSwitchInput.checked) {
                dataRoamingToggleSwitch.click();
            } else {
                tau.openPopup(dataRoamingSwitchPopup);
            }
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            mobileDataSwitch.addEventListener('click', onMobileDataSwitchClick);
            mobileDataToggleSwitch.addEventListener(
                'click',
                onMobileDataToggleSwitchClick
            );
            mobileDataSwitchOnPopupOkBtn.addEventListener(
                'click',
                onMobileDataSwitchPopupOkBtnClick
            );
            mobileDataSwitchOffPopupOkBtn.addEventListener(
                'click',
                onMobileDataSwitchPopupOkBtnClick
            );
            dataRoamingSwitch.addEventListener(
                'click',
                onDataRoamingSwitchClick
            );
            dataRoamingToggleSwitch.addEventListener(
                'click',
                onDataRoamingToggleSwitchClick
            );
            dataRoamingSwitchPopupOkBtn.addEventListener(
                'click',
                onDataRoamingSwitchPopupOkBtnClick
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('mobile-networks');
            mobileDataSwitch = document.getElementById('mobile-data-switch');
            mobileDataSwitchOnPopup = document.getElementById(
                'mobile-data-switch-on-popup'
            );
            mobileDataSwitchOffPopup = document.getElementById(
                'mobile-data-switch-off-popup'
            );
            mobileDataSwitchOnPopupOkBtn = document.getElementById(
                'mobile-data-switch-on-popup-ok-btn'
            );
            mobileDataSwitchOffPopupOkBtn = document.getElementById(
                'mobile-data-switch-off-popup-ok-btn'
            );
            mobileDataToggleSwitch = document.querySelector(
                '#mobile-data-switch .ui-toggleswitch'
            );
            mobileDataSwitchInput = document.getElementById(
                'mobile-data-switch-input'
            );
            dataRoamingSwitch = document.getElementById('data-roaming-switch');
            dataRoamingSwitchPopup = document.getElementById(
                'data-roaming-switch-popup'
            );
            dataRoamingSwitchPopupOkBtn = document.getElementById(
                'data-roaming-switch-popup-ok-btn'
            );
            dataRoamingToggleSwitch = document.querySelector(
                '#data-roaming-switch .ui-toggleswitch'
            );
            dataRoamingSwitchInput = document.getElementById(
                'data-roaming-switch-input'
            );

            bindEvents();

            listHelper.animate(page);
            popupHelper.resetScrollBeforeOpen(mobileDataSwitchOnPopup);
            popupHelper.resetScrollBeforeOpen(mobileDataSwitchOffPopup);
            popupHelper.resetScrollBeforeOpen(dataRoamingSwitchPopup);
        }

        return {
            init: init
        };
    }
});
