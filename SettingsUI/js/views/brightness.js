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

/*global define, document, tau, $ */

/**
 * Brightness view module.
 */
define({
    name: 'views/brightness',
    requires: [],
    def: function brightness() {
        'use strict';

        /**
         * Page element.
         * @type {HTMLElement}
         */
        var page = null,

            /**
             * Slider element.
             * @type {HTMLElement}
             */
            sliderElement = null,

            /**
             * Brightness minus element.
             * @type {HTMLElement}
             */
            brightnessMinus = null,

            /**
             * Brightness value element.
             * @type {HTMLElement}
             */
            brightnessValue = null,

            /**
             * Brightness icon element.
             * @type {HTMLElement}
             */
            brightnessIcon = null,

            /**
             * Brightness plus element.
             * @type {HTMLElement}
             */
            brightnessPlus = null,

            /**
             * Circle slider widget.
             * @type {HTMLElement}
             */
            circleSlider = null,

            BRIGHTNESS_ICONS = ['brightness-level-icon-0',
                                'brightness-level-icon-1',
                                'brightness-level-icon-2',
                                'brightness-level-icon-3',
                                'brightness-level-icon-4',
                                'brightness-level-icon-5',
                                'brightness-level-icon-6',
                                'brightness-level-icon-7',
                                'brightness-level-icon-8',
                                'brightness-level-icon-9'];

        /**
         * Updates brightness value.
         * @param {number|string} value
         */
        function updateBrightnessValue(value) {
            brightnessValue.innerText = value;
        }

        /**
         * Updates brightness icon.
         * @param {number|string} value
         */
        function updateBrightnessIcon(value) {
            var i = 0,
                length = BRIGHTNESS_ICONS.length;

            for (i = 0; i < length; i += 1) {
                brightnessIcon.classList.remove(BRIGHTNESS_ICONS[i]);
            }
            brightnessIcon.classList.add('brightness-level-icon-' + value);
        }

        /**
         * Handles progresschange event on circle slide element.
         */
        function onCircleSliderChange() {
            updateBrightnessValue(circleSlider.value());
            updateBrightnessIcon(circleSlider.value());
        }

        /**
         * Handles pagebeforeshow event on page element.
         */
        function onPageBeforeShow() {
            circleSlider = tau.widget.Slider(sliderElement);
            updateBrightnessValue(circleSlider.value());
            updateBrightnessIcon(circleSlider.value());
            circleSlider.on('progresschange', onCircleSliderChange);
        }

        /**
         * Increases brightness value.
         */
        function increaseBrightness() {
            var currentBrightnessValue = parseInt(circleSlider.value(), 10);

            // temporary workaround, because slider widget cannot be set
            // to 0 value from any positive value. -1 value is needed.
            if (currentBrightnessValue === -1) {
                currentBrightnessValue += 1;
            }

            if (currentBrightnessValue < 9) {
                currentBrightnessValue += 1;
            }

            circleSlider.value(currentBrightnessValue);
        }

        /**
         * Decreases brightness value.
         */
        function decreaseBrightness() {
            var currentBrightnessValue = parseInt(circleSlider.value(), 10);

            if (currentBrightnessValue > 0) {
                currentBrightnessValue -= 1;
            }

            // temporary workaround, because slider widget cannot be set
            // to 0 value from any positive value. -1 value is needed.
            if (currentBrightnessValue === 0) {
                currentBrightnessValue -= 1;
            }

            circleSlider.value(currentBrightnessValue);
        }

        /**
         * Handles click event on brightness minus element.
         */
        function onBrightnessMinusClick() {
            decreaseBrightness();
        }

        /**
         * Handles click event on brightness plus element.
         */
        function onBrightnessPlusClick() {
            increaseBrightness();
        }

        /**
         * Register events.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            brightnessMinus.addEventListener('click', onBrightnessMinusClick);
            brightnessPlus.addEventListener('click', onBrightnessPlusClick);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('brightness');
            sliderElement = page.querySelector('#circle');
            brightnessMinus = page.querySelector('#brightness-minus');
            brightnessValue = page.querySelector('#brightness-value');
            brightnessIcon = page.querySelector('#brightness-icon');
            brightnessPlus = page.querySelector('#brightness-plus');
            bindEvents();
        }

        return {
            init: init
        };
    }
});
