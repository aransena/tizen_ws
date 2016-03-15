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

/*global define, document, window, tau*/

/**
 * Main page module.
 * @requires {@link core/event}
 * @requires {@link helpers/vibration}
 * @requires {@link models/heartRate}
 * @namespace HeartRateMonitor/views/main
 * @memberof HeartRateMonitor/views
 */

define({
    name: 'views/main',
    requires: [
        'core/event',
        'helpers/vibration',
        'models/heartRate'
    ],
    def: function viewsPageMain(req) {
        'use strict';

        /**
         * Core event module object.
         * @type {Module}
         */
        var ev = req.core.event,

            /**
             * Model heartRate module object.
             * @type {Module}
             */
            heartRate = req.models.heartRate,

            /**
             * Vibration helper module.
             * @type {Module}
             */
            vibration = req.helpers.vibration,

            /**
             * Label displaying the value of heart rate.
             * @type {HTMLElement}
             */
            heartRateEl = null,

            /**
             * Label displaying the heart image.
             * @type {HTMLElement}
             */
            heartImg = null,

            /**
             * Slider input element for change heart rate limit value.
             * @type {HTMLElement}
             */
            slider = null,

            /**
             * Text input element for set heart rate limit value.
             * @type {HTMLElement}
             */
            settingsHeartrateValue = null,

            /**
             * Text element shows set heart rate limit value.
             * @type {HTMLElement}
             */
            limitInfoValue = null,

            /**
             * Settings popup.
             * @type {HTMLElement}
             */
            settingsPopup = null,

            /**
             * Settings popup accepting button.
             * @type {HTMLElement}
             */
            okPopupBtn = null,

            /**
             * Settings heart rate limit.
             * @type {Number}
             */
            HRLimit = 210,

            /**
             * Current heart rate.
             * @type {Number}
             */
            currentRate = 0,

            /**
             * Current value of animation duration.
             * @type {String}
             */
            currentAnimationDuration = '1.5',

            /**
             * Reference to the main page element.
             * @type {HTMLElement}
             */
            page = null,

            infoBackBtn = null,

            /**
             * Text element shows when .
             * @type {HTMLElement}
             */
            measuringText = null,

            /**
             * Timeout identifier for showing helping information.
             * @type {number}
             */
            infoTimeoutEnd = 0,

            /**
             * Timeout identifier for opening helping information.
             * @type {number}
             */
            infoTimeout = 0,

            /**
             * Time for measuring heart rate.
             * @type {number}
             */
            INFO_SETTIMEOUT_DELAY = 10000,

            /**
             * Time for showing information in case,
             * when heart rate is not perceptible by device.
             * @type {number}
             */
            INFO_SHOW_DELAY = 10000;

        /**
         * Handles limit excess.
         * @param {boolean} exceeded Indicates whether limit is exceeded or not.
         */
        function setLimitExceeded(exceeded) {
            if (exceeded) {
                page.classList.add('limit-excedeed');
                vibration.start();
            } else {
                page.classList.remove('limit-excedeed');
                vibration.stop();
            }
        }

        /**
         * Updates animation duration if it has to be changed.
         */
        function updateAnimationDuration(rate) {
            var animationDuration = '1.5';

            if (rate < 1) {
                animationDuration = 0;
            } else {
                animationDuration = (120 / rate).toFixed(1);
            }

            if (animationDuration !== currentAnimationDuration) {
                heartImg.style.webkitAnimationDuration = animationDuration +
                    's';
                currentAnimationDuration = animationDuration;
            }
        }

        /**
         * Hides measuring heart rate helping information.
         */
        function hideMeasuringInfo() {
            tau.changePage('#main');
            infoTimeoutEnd = 0;
        }

        /**
         * Shows measuring heart rate helping information
         * and sets timeout for hide this information.
         */
        function showMeasuringInfo() {
            infoTimeout = 0;

            if (!settingsPopup.classList.contains('ui-popup-active')) {
                tau.changePage('#info');
                infoTimeoutEnd = window.setTimeout(hideMeasuringInfo,
                    INFO_SHOW_DELAY);
            }
        }

        /**
         * Handles 'heartRate.change' event.
         * @param {heartRateInfo} heartRateInfo
         */
        function onHeartRateDataChange(heartRateInfo) {
            var rate = heartRateInfo.detail.rate,
                activePage = document
                    .getElementsByClassName('ui-page-active')[0],
                activePageId = activePage ? activePage.id : '';

            if (rate < 1) {
                rate = 0;
                heartRateEl.innerHTML = '';
                heartImg.classList.remove('animate');
                measuringText.classList.remove('hide');
                measuringText.classList.add('show');

                if (activePageId === 'main' && infoTimeout === 0) {
                    infoTimeout = window.setTimeout(showMeasuringInfo,
                        INFO_SETTIMEOUT_DELAY);
                }
            } else {
                window.clearTimeout(infoTimeout);
                window.clearTimeout(infoTimeoutEnd);
                infoTimeout = 0;
                infoTimeoutEnd = 0;

                if (activePageId === 'info') {
                    tau.changePage('#main');
                }

                if (!heartImg.classList.contains('animate')) {
                    heartImg.classList.add('animate');
                    measuringText.classList.remove('show');
                    measuringText.classList.add('hide');
                }
                heartRateEl.innerHTML = rate;
            }

            currentRate = rate;

            updateAnimationDuration(rate);
            setLimitExceeded(rate > HRLimit);
        }

        /**
         * Handles 'heartRate.change' event.
         * @param {event} event
         */
        function onSettingsSliderChange(event) {
            settingsHeartrateValue.value = event.srcElement.value;
        }

        /**
         * Handles click setting popup accepting button.
         */
        function onOkPopupBtnClick() {
            HRLimit = settingsHeartrateValue.value;
            heartRate.setLimit(HRLimit);
        }

        /**
         * Handles settings popup before show event.
         */
        function onSettingsPopupBeforeShow() {
            heartRate.getLimit();
        }

        /**
         * Handles 'models.heartRate.setLimit' event.
         */
        function onSetLimit() {
            heartRate.getLimit();
        }

        /**
         * Handles 'models.heartRate.getLimit' event.
         * * @param {event} e
         */
        function onGetLimit(e) {
            var limit = e.detail.value;

            if (limit === undefined) {
                limit = HRLimit;
            }

            settingsHeartrateValue.value = limit;
            limitInfoValue.innerHTML = limit;
            slider.value = limit;
            HRLimit = limit;

            setLimitExceeded(currentRate > HRLimit);
        }

        /**
         * Handles click event on back button on helping information page.
         */
        function onInfoBackBtnClick() {
            window.clearTimeout(infoTimeoutEnd);
            infoTimeoutEnd = 0;
            tau.changePage('#main');
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            page = document.getElementById('main');
            heartRateEl = document.getElementById('heart-rate-value');
            heartImg = document.getElementById('heart-img');
            slider = document.getElementById('slider');
            settingsHeartrateValue = document
                .getElementById('settings-heartrate-value');
            limitInfoValue = document.getElementById('limit-info-value');
            measuringText = document.getElementById('measuring-info');

            settingsPopup = document.getElementById('settings-popup');
            okPopupBtn = document.getElementById('ok-popup-btn');

            infoBackBtn = document.getElementById('info-back-btn');

            slider.addEventListener('change', onSettingsSliderChange);
            okPopupBtn.addEventListener('click', onOkPopupBtnClick);
            settingsPopup.addEventListener('popupbeforeshow',
                onSettingsPopupBeforeShow);
            infoBackBtn.addEventListener('click', onInfoBackBtnClick);
        }

        /**
         * Initializes module.
         * @memberof HeartRateMonitor/views/main
         */
        function init() {
            heartRate.start();
            bindEvents();
        }

        ev.on({
            'models.heartRate.change': onHeartRateDataChange,
            'models.heartRate.setLimit': onSetLimit,
            'models.heartRate.getLimit': onGetLimit
        });

        return {
            init: init
        };
    }

});
