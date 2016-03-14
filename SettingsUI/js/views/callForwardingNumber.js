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

/*global setTimeout, history, define, document */

/**
 * Call forwarding view module.
 */
define({
    name: 'views/callForwardingNumber',
    requires: [
        'core/event',
        'helpers/list',
        'helpers/math'
    ],
    def: function callForwardingNumberSettings(req) {
        'use strict';

        /**
         * Count of parts the dial is divided for.
         * @type {number}
         */
        var SEGMENTS_COUNT = 10,

            /**
             * Device radius in pixels.
             * @type {number}
             */
            DEVICE_RADIUS = 180,

            /**
             * Distance from center to indicator in pixels.
             * @type {number}
             */
            INDICATOR_DISTANCE = 149,

            /**
             * Indicator HTML class restore timeout in milliseconds.
             * @type {number}
             */
            INDICATOR_RESTORE_TIMEOUT = 500,

            /**
             * Page's HTML id attribute.
             * @type {string}
             */
            PAGE_ID = 'call-forwarding-more-number-settings',

            /**
             * Maximum users input length.
             * @type {number}
             */
            MAX_INPUT_LENGTH = 10,

            /**
             * Distance from center to clickable zone (in pixels).
             * @type {number}
             */
            CLICKABLE_ZONE_DISTANCE = 110,

            /**
             * Event core module.
             * @type {Module}
             */
            e = req.core.event,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null,

            /**
             * Canvas element.
             * @type {HTMLElement}
             */
            canvas = null,

            /**
             * Canvas context holder.
             * @type {CanvasRenderingContext2D}
             */
            context = null,

            /**
             * User's input.
             * @type {number}
             */
            userInput = '',

            /**
             * User's input preview holder.
             * @type {HTMLElement}
             */
            userInputPreview = document
                .getElementById('call-gear-number'),

            /**
             * Tap indicator.
             * @type {HTMLElement}
             */
            dialIndicator = document
                .querySelector('.circular-dial .dial-indicator'),

            /**
             * Delete button HTML element.
             * @type {HTMLElement}
             */
            deleteButton = null,

            /**
             * Confirm button HTML element.
             * @type {HTMLElement}
             */
            confirmButton = null,

            /**
             * List helper module instance.
             * @type {Module}
             */
            listHelper = req.helpers.list,

            /**
             * Math helper module instance.
             * @type {Module}
             */
            mathHelper = req.helpers.math;

        /**
         * Draws segments dividers.
         */
        function drawSegmentsDividers() {

            /**
             * Angular width of segment.
             * @type {number}
             */
            var segmentAngularWidth = 2 * Math.PI / SEGMENTS_COUNT,

                /**
                * First divider angle (radians).
                * @type {number}
                */
                startAngle = -segmentAngularWidth / 2,

                /**
                * Full circle angle from first divider (radians).
                * @type {number}
                */
                endAngle = startAngle + 2 * Math.PI,

                /**
                * Start angle (radians).
                * @type {number}
                */
                angle = startAngle;

            for (angle; angle < endAngle; angle += segmentAngularWidth) {
                context.beginPath();
                context.moveTo(
                    (1 + Math.sin(angle)) * DEVICE_RADIUS,
                    (1 + Math.cos(angle)) * DEVICE_RADIUS
                );
                context.lineTo(
                    (1 + Math.sin(angle + Math.PI)) * DEVICE_RADIUS,
                    (1 + Math.cos(angle + Math.PI)) * DEVICE_RADIUS
                );
                context.stroke();
            }
        }

        /**
         * Initializes canvas elements.
         */
        function prepareCanvasElement() {
            canvas = document.querySelector(
                '#call-forwarding-more-number-settings canvas'
            );
            context = canvas.getContext('2d');

            canvas.width = canvas.height = DEVICE_RADIUS * 2;
            context = canvas.getContext('2d');
            context.strokeStyle = '#001a33';
            context.lineWidth = 2;
            drawSegmentsDividers();
        }

        /**
         * Computes segment number by coordinates.
         * @param {number} x position horizontal component
         * @param {number} y position vertical component
         * @return {number} segment number;
         */
        function getSegment(x, y) {
            /**
             * Segment's angular width (radians).
             * @type {number}
             */
            var angle = -2 * Math.PI / SEGMENTS_COUNT;

            return (
                Math.floor((Math.atan2(x, y) - 0.5 * angle) / angle) +
                    SEGMENTS_COUNT / 2 + 1
            ) % SEGMENTS_COUNT;
        }

        /**
         * User's input getter.
         * @return {string} user's input
         */
        function getValue() {
            return userInput;
        }

        /**
         * Computes vector length.
         * @param {number} x horizontal vector component.
         * @param {number} y vertical vector component.
         * @return {number} vector length
         */
        function vectorLength(x, y) {
            x = Math.abs(x);
            y = Math.abs(y);
            return Math.sqrt(x * x + y * y);
        }

        /**
         * Updates user input preview element.
         */
        function updateInput() {
            userInputPreview.innerText = userInput;
        }

        /**
         * Adds char at the end of user input.
         * @param {number} button Pressed button number
         */
        function addToInput(button) {
            if (userInput.length < MAX_INPUT_LENGTH) {
                userInput += button.toString();
                updateInput();
            }
        }

        /**
         * Computes position and shows indicator.
         * @param {number} button Pressed button number.
         */
        function triggerIndicator(button) {
            /**
             * Angle between vertical axis and of line from center
             * to center of pressed button (radians)
             * @type {number}
             */
            var angle = button * 2 * Math.PI / SEGMENTS_COUNT - Math.PI / 2;

            dialIndicator.classList.add('active');

            // compute position
            dialIndicator.style.left = mathHelper.truncate(
                Math.cos(angle) * INDICATOR_DISTANCE + DEVICE_RADIUS
            ) + 'px';
            dialIndicator.style.top = mathHelper.truncate(
                Math.sin(angle) * INDICATOR_DISTANCE + DEVICE_RADIUS
            ) + 'px';

            setTimeout(function removeClass() {
                dialIndicator.classList.remove('active');
            }, INDICATOR_RESTORE_TIMEOUT);
        }

        /**
         * Handles click on layer.
         * @param {Event} event
         */
        function onLayerClick(event) {
            var x = event.clientX - DEVICE_RADIUS,
                y = event.clientY - DEVICE_RADIUS,
                button = null;

            if (vectorLength(x, y) > CLICKABLE_ZONE_DISTANCE) {
                button = getSegment(x, y);
                addToInput(button);
                triggerIndicator(button);
            }
        }

        /**
         * Removes last char from user's input.
         */
        function onDeleteInput() {
            if (userInput.length) {
                userInput = userInput.split('');
                userInput.pop();
                userInput = userInput.join('');
            }

            deleteButton.classList.add('active');
            setTimeout(function removeClass() {
                deleteButton.classList.remove('active');
            }, INDICATOR_RESTORE_TIMEOUT);

            updateInput();
        }

        /**
         * Handles confirm button click.
         */
        function onConfirmInput() {
            // fires an event with user's provided data.
            e.fire('confirm', getValue());
            history.back();
        }

        /**
         * Adds listeners to elements.
         */
        function bindElements() {
            document
                .querySelector('#' + PAGE_ID + ' .clickable-layer')
                    .addEventListener('click', onLayerClick);

            deleteButton.addEventListener('click', onDeleteInput);
            confirmButton.addEventListener('click', onConfirmInput);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById(PAGE_ID);

            deleteButton = document
                .querySelector('#' + PAGE_ID + ' .delete-button');

            confirmButton = document
                .querySelector('#' + PAGE_ID + ' .confirm-button');

            listHelper.animate(page);

            prepareCanvasElement();
            bindElements();
        }

        return {
            init: init,
            getValue: getValue
        };
    }
});
