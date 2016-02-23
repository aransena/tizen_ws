/*
 * Copyright (c) 2014 Samsung Electronics Co., Ltd. All rights reserved.
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

/*global define, console, document, history, tau*/
/*jslint plusplus: true*/

/**
 * Options page module
 */

define({
    name: 'views/options',
    requires: [
        'core/event',
        'models/options'
    ],
    def: function viewsOptions(req) {
        'use strict';

        var e = req.core.event,
            o = req.models.options,

            page = null,
            cancelBtn = null,
            okBtn = null,
            range = null,
            preview = null,
            white = null,
            red = null,
            green = null,
            blue = null;

        /**
         * Handles views.options.show event
         */
        function show() {
            tau.changePage('#options');
        }

        /**
         * Gets options values.
         * @return {object}
         */
        function getOptionValues() {
            return {
                width: o.getStrokeWidth(),
                color: o.getStrokeColor()
            };
        }

        /**
         * Sets options values.
         */
        function setOptionValues() {
            o.setStrokeWidth(range.value);
            o.setStrokeColor(preview.style.backgroundColor);
        }

        /**
         * Sets stroke properties.
         * @param {object} data Data object
         * @param {number} data.width Stroke width
         * @param {string} data.color Stroke color
         */
        function setStrokeProperties(data) {
            preview.style.height = data.width + 'px';
            preview.style.backgroundColor = data.color;
        }

        /**
         * Resets UI.
         */
        function resetUI() {
            var optValues = getOptionValues();
            range.value = optValues.width;
            setStrokeProperties(optValues);
        }

        /**
         * Handles pagebeforeshow event.
         */
        function onPageBeforeShow() {
            resetUI();
        }

        /**
         * Handles click event on color button.
         */
        function onCancelBtnTap() {
            history.back();
        }

        /**
         * Handles click event on line button.
         */
        function onOkBtnTap() {
            setOptionValues();
            history.back();
        }

        /**
         * Handles change event on range slider.
         */
        function setPreviewHeight(value) {
            preview.style.height = value + 'px';
        }

        /**
         * Handles change event on range slider.
         * @param {event} ev
         */
        function onRangeChange(ev) {
            setPreviewHeight(ev.target.value);
        }

        /**
         * Handles tap event on white.
         */
        function onWhiteTap() {
            preview.style.backgroundColor = '#fff';
        }

        /**
         * Handles tap event on white.
         */
        function onRedTap() {
            preview.style.backgroundColor = '#f00';
        }

        /**
         * Handles tap event on white.
         */
        function onGreenTap() {
            preview.style.backgroundColor = '#0f0';
        }

        /**
         * Handles tap event on white.
         */
        function onBlueTap() {
            preview.style.backgroundColor = '#00f';
        }

        /**
         * Registers view event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            cancelBtn.addEventListener('click', onCancelBtnTap);
            okBtn.addEventListener('click', onOkBtnTap);
            range.addEventListener('change', onRangeChange);
            white.addEventListener('click', onWhiteTap);
            red.addEventListener('click', onRedTap);
            green.addEventListener('click', onGreenTap);
            blue.addEventListener('click', onBlueTap);
        }

        /**
         * Inits module.
         */
        function init() {
            page = document.getElementById('options');
            cancelBtn = document.getElementById('options-cancel-btn');
            okBtn = document.getElementById('options-ok-btn');
            range = document.getElementById('options-range');
            preview = document.getElementById('options-preview');
            white = document.getElementById('options-colors-white');
            red = document.getElementById('options-colors-red');
            green = document.getElementById('options-colors-green');
            blue = document.getElementById('options-colors-blue');
            bindEvents();
        }

        e.listeners({
            'views.main.show.options': show
        });

        return {
            init: init
        };
    }

});
