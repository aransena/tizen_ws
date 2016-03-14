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

/*global define, document, tau, setTimeout*/

/**
 * Gear info view module.
 */
define({
    name: 'views/gearInfo',
    requires: [
        'views/aboutDevice',
        'views/resetGear',
        'helpers/list',
        'helpers/popup',
        'helpers/page'
    ],
    def: function gearInfo(req) {
        'use strict';

        /**
         * List helper module instance.
         * @type {Module}
         */
        var listHelper = req.helpers.list,

            /**
             * List helper module instance.
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
             * Report diagnostic element.
             * @type {HTMLElement}
             */
            reportDiagnostic = null,

            /**
             * Report diagnostic popup element.
             * @type {HTMLElement}
             */
            reportDiagnosticPopup = null,

            /**
             * Report diagnostic toggle switch element.
             * @type {HTMLElement}
             */
            reportDiagnosticToggleSwitch = null,

            /**
             * Report diagnostic input element.
             * @type {HTMLElement}
             */
            reportDiagnosticInput = null,

            /**
             * Report diagnostic popup ok button.
             * @type {HTMLElement}
             */
            reportDiagnosticPopupOkBtn = null,

            /**
             * Report diagnostic popup see all button.
             * @type {HTMLElement}
             */
            reportDiagnosticPopupSeeAllBtn = null,

            /**
             * Debugging element.
             * @type {HTMLElement}
             */
            debugging = null,

            /**
             * Debugging popup element.
             * @type {HTMLElement}
             */
            debuggingPopup = null,

            /**
             * Debugging toggle switch element.
             * @type {HTMLElement}
             */
            debuggingToggleSwitch = null,

            /**
             * Debugging input element.
             * @type {HTMLElement}
             */
            debuggingInput = null,

            /**
             * Debugging popup ok button.
             * @type {HTMLElement}
             */
            debuggingPopupOkBtn = null,

            /**
             * Debugging see all popup element.
             * @type {HTMLElement}
             */
            reportDiagnosticSeeAllPopup = null,

            /**
             * Indicates whether see all button has been clicked.
             * @type {boolean}
             */
            seeAllClicked = false,

            /**
             * Indicates whether see all popup has been closed.
             * @type {boolean}
             */
            seeAllClosed = false;

        /**
         * Handles click event on report diagnostic element.
         */
        function onReportDiagnosticClick() {
            if (reportDiagnosticInput.checked) {
                reportDiagnosticToggleSwitch.click();
            } else {
                tau.openPopup(reportDiagnosticPopup);
            }
        }

        /**
         * Handles click event on report diagnostic popup ok button.
         */
        function onReportDiagnosticPopupOkBtnClick() {
            reportDiagnosticToggleSwitch.click();
        }

        /**
         * Handles click event on report diagnostic popup see all button.
         */
        function onReportDiagnosticPopupSeeAllBtnClick() {
            seeAllClicked = true;
            tau.closePopup();
        }

        /**
         * Handles click event on toggle switch element.
         * @param {Event} e
         */
        function onReportDiagnosticToggleSwitchClick(e) {
            e.stopPropagation();
        }

        /**
         * Handles click event on debugging element.
         */
        function onDebuggingClick() {
            if (debuggingInput.checked) {
                debuggingToggleSwitch.click();
            } else {
                tau.openPopup(debuggingPopup);
            }
        }

        /**
         * Handles click event on debugging popup ok button.
         */
        function onDebuggingPopupOkBtnClick() {
            debuggingToggleSwitch.click();
        }

        /**
         * Handles click event on toggle switch element.
         * @param {Event} e
         */
        function onDebuggingToggleSwitchClick(e) {
            e.stopPropagation();
        }

        /**
         * Resets report diagnostic popup element scroll position.
         */
        function resetReportDiagnosticPopupPosition() {
            reportDiagnosticPopup.querySelector('.ui-popup-wrapper')
                .scrollTop = 0;
        }

        /**
         * Handles popupbeforeshow event on report diagnostic popup element.
         */
        function onReportDiagnosticPopupBeforeShow() {
            if (seeAllClosed) {
                seeAllClosed = false;
            } else {
                setTimeout(resetReportDiagnosticPopupPosition, 0);
            }
        }

        /**
         * Handles popuphide event on report diagnostic popup element.
         */
        function onReportDiagnosticPopupHide() {
            if (seeAllClicked) {
                seeAllClicked = false;
                tau.openPopup(reportDiagnosticSeeAllPopup);
            }
        }

        /**
         * Handles popuphide event on report diagnostic see all popup element.
         */
        function onReportDiagnosticSeeAllPopupHide() {
            seeAllClosed = true;
            tau.openPopup(reportDiagnosticPopup);
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
            reportDiagnostic.addEventListener('click', onReportDiagnosticClick);
            reportDiagnosticToggleSwitch.addEventListener(
                'click',
                onReportDiagnosticToggleSwitchClick
            );
            reportDiagnosticPopupOkBtn.addEventListener(
                'click',
                onReportDiagnosticPopupOkBtnClick
            );
            reportDiagnosticPopupSeeAllBtn.addEventListener(
                'click',
                onReportDiagnosticPopupSeeAllBtnClick
            );
            debugging.addEventListener('click', onDebuggingClick);
            debuggingToggleSwitch.addEventListener(
                'click',
                onDebuggingToggleSwitchClick
            );
            debuggingPopupOkBtn.addEventListener(
                'click',
                onDebuggingPopupOkBtnClick
            );
            reportDiagnosticPopup.addEventListener(
                'popupbeforeshow',
                onReportDiagnosticPopupBeforeShow
            );
            reportDiagnosticPopup.addEventListener(
                'popuphide',
                onReportDiagnosticPopupHide
            );
            reportDiagnosticSeeAllPopup.addEventListener(
                'popuphide',
                onReportDiagnosticSeeAllPopupHide
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('gear-info');
            reportDiagnostic = document.getElementById('report-diagnostic');
            reportDiagnosticPopup = document.getElementById(
                'report-diagnostic-popup'
            );
            reportDiagnosticPopupOkBtn = document.getElementById(
                'report-diagnostic-popup-ok-btn'
            );
            reportDiagnosticPopupSeeAllBtn = document.getElementById(
                'report-diagnostic-popup-see-all-btn'
            );
            reportDiagnosticToggleSwitch = reportDiagnostic.querySelector(
                '.ui-toggleswitch'
            );
            reportDiagnosticInput = document.getElementById(
                'report-diagnostic-input'
            );
            debugging = document.getElementById('debugging');
            debuggingPopup = document.getElementById(
                'debugging-popup'
            );
            debuggingPopupOkBtn = document.getElementById(
                'debugging-popup-ok-btn'
            );
            debuggingToggleSwitch = debugging.querySelector(
                '.ui-toggleswitch'
            );
            debuggingInput = document.getElementById(
                'debugging-input'
            );
            reportDiagnosticSeeAllPopup = document.getElementById(
                'report-diagnostic-see-all-popup'
            );

            bindEvents();

            listHelper.animate(page);
            listHelper.marquee(page.querySelector('.ui-listview'));
            popupHelper.resetScrollBeforeOpen(reportDiagnosticSeeAllPopup);
            popupHelper.resetScrollBeforeOpen(debuggingPopup);
        }

        return {
            init: init
        };
    }
});
