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
 * Set time view module.
 */

define({
    name: 'views/setTime',
    requires: [
        'core/event',
        'helpers/dom',
        'helpers/faces',
        'helpers/date',
        'helpers/math'
    ],
    def: function setTimeDefine(req) {
        'use strict';

        /**
         * Core events module.
         * @type {Module}
         */
        var e = req.core.event,

            /**
             * DOM helper module.
             * @type {Module}
             */
            domHelper = req.helpers.dom,

            /**
             * Faces helper module.
             * @type {Module}
             */
            facesHelper = req.helpers.faces,

            /**
             * Date helper module.
             * @type {Module}
             */
            dateHelper = req.helpers.date,

            /**
             * Math helper module.
             * @type {Module}
             */
            mathHelper = req.helpers.math,

            /**
             * Hour part of the time constant.
             * @type {string}
             */
            TIME_PART_HOUR = 'hour',

            /**
             * Minute part of the time constant.
             * @type {string}
             */
            TIME_PART_MINUTE = 'minute',

            /**
             * Time popup element reference.
             * @type {HTMLElement}
             */
            timePopup = null,

            /**
             * Current system time.
             * @type {Date}
             */
            systemTime = null,

            /**
             * Current view time object.
             * @type {Date}
             */
            currentTime = null,

            /**
             * Face layer context reference.
             * @type {CanvasRenderingContext2D}
             */
            faceLayerContext = null,

            /**
             * Hand layer element reference.
             * @type {HTMLElement}
             */
            handLayerElement = null,

            /**
             * Hand layer context reference.
             * @type {CanvasRenderingContext2D}
             */
            handLayerContext = null,

            /**
             * Current active part of the time.
             * @type {string}
             */
            activeTimePart = '',

            /**
             * Configuration object for hand face.
             * Used to draw hand face.
             * @type {object}
             */
            handFaceConfig = {
                size: 1,
                angle: 0,
                lengths: [24],
                colors: ['#ffad64'],
                lineWidths: [6]
            },

            /**
             * Configuration object for time face.
             * Used to draw month face.
             * @type {object}
             */
            timeFaceConfig = {
                size: 240,
                lengths: [20, 7, 7, 7, 7],
                colors: ['#ffffff', '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae',
                    '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae',
                    '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae',
                    '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae', '#aeaeae'],
                lineWidths: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1]
            },

            /**
             * Hand angle step (in degrees).
             * @type {number}
             */
            handAngleStep = 0,

            /**
             * Current value of hand angle (in degrees).
             * @type {number}
             */
            currentHandAngle = 0;

        /**
         * Sets value (in degrees) for hand angle.
         * @param {number} value
         */
        function setHandAngle(value) {
            var normalized = mathHelper.mod(currentHandAngle, 360),
                distanceCCW = 0,
                distanceCW = 0;

            if (normalized === value) {
                return;
            }

            if (value < normalized) {
                distanceCW = value + 360 - normalized;
                distanceCCW = normalized - value;
            } else {
                distanceCW = value - normalized;
                distanceCCW = normalized + 360 - value;
            }

            if (distanceCW <= distanceCCW) {
                currentHandAngle += distanceCW;
            } else {
                currentHandAngle -= distanceCCW;
            }

            e.fire('hand.angle.changed');
        }

        /**
         * Sets active part of the time.
         * @param {string} part
         */
        function setActiveTimePart(part) {
            if (activeTimePart === part) {
                return;
            }

            activeTimePart = part;

            e.fire('time.part.changed');
            e.fire(part + '.part.activated');
        }

        /**
         * Updates specified part of the time by specified value.
         * @param {string} timePart
         * @param {number} valueChange
         */
        function setCurrentTimePartRelative(timePart, valueChange) {
            var hour = currentTime.getHours(),
                minute = currentTime.getMinutes();

            if (timePart === TIME_PART_HOUR) {
                hour = mathHelper.mod(hour + valueChange, 24);
            } else if (timePart === TIME_PART_MINUTE) {
                minute = mathHelper.mod(minute + valueChange, 60);
            } else {
                return;
            }

            currentTime.setHours(hour);
            currentTime.setMinutes(minute);

            e.fire('time.changed');
        }

        /**
         * Updates whole time in the UI.
         */
        function updateTime() {
            timePopup.querySelector('.hour-value')
                .innerText = dateHelper.format(currentTime, 'HH');
            timePopup.querySelector('.minute-value')
                .innerText = dateHelper.format(currentTime, 'MM');
        }

        /**
         * Updates "clock" hand position basing on current date.
         */
        function updateHand() {
            var activePartElement = timePopup.querySelector('.active'),
                activePart = '',
                angle = 0;

            if (!activePartElement) {
                return;
            }

            activePart = activePartElement.getAttribute('data-time-part');

            if (activePart === TIME_PART_HOUR) {
                angle = currentTime.getHours() * handAngleStep;
            } else if (activePart === TIME_PART_MINUTE) {
                angle = currentTime.getMinutes() * handAngleStep;
            } else {
                return;
            }

            setHandAngle(angle);
        }

        /**
         * Handles current time change event.
         */
        function onCurrentTimeChanged() {
            updateTime();
            updateHand();
        }

        /**
         * Handles change of active part of the time.
         */
        function onActiveTimePartChanged() {
            var container = timePopup.querySelector(
                    '.time-container[data-time-part="' + activeTimePart + '"]'),
                currentActive = null;

            if (!container) {
                return;
            }

            currentActive = timePopup.querySelector('.active');

            if (currentActive) {
                currentActive.classList.remove('active');
            }

            container.classList.add('active');
        }

        /**
         * Handles "hour" part of the time activation event.
         */
        function onHourPartActivated() {
            // change step for 12 hours
            handAngleStep = 360 / 12;
            updateHand();
        }

        /**
         * Handles "minute" part of the time activation event.
         */
        function onMinutePartActivated() {
            // change step for 60 minutes
            handAngleStep = 360 / 60;
            updateHand();
        }

        /**
         * Handles hand angle change event.
         */
        function onHandAngleChanged() {
            handLayerElement.style.webkitTransform =
                'rotate(' + currentHandAngle + 'deg)';
        }

        /**
         * Handles "rotarydetent" event.
         * @param {Event} ev
         */
        function onRotaryDetent(ev) {
            var direction = ev.detail.direction,
                activePartElement = timePopup.querySelector('.active'),
                activePart = '';

            ev.stopPropagation();

            if (!activePartElement) {
                return;
            }

            activePart = activePartElement.getAttribute('data-time-part');

            if (direction === 'CW') {
                setCurrentTimePartRelative(activePart, 1);
            } else if (direction === 'CCW') {
                setCurrentTimePartRelative(activePart, -1);
            }
        }

        /**
         * Handles "popupbeforeshow" event for time popup.
         */
        function onPopupBeforeShow() {
            currentTime = new Date(systemTime.valueOf());

            facesHelper.drawFace(handLayerContext, handFaceConfig);
            facesHelper.drawFace(faceLayerContext, timeFaceConfig);
            updateTime();
            setActiveTimePart(TIME_PART_HOUR);
            document.addEventListener('rotarydetent', onRotaryDetent);
        }

        /**
         * Handles "popuphide" event for date popup.
         */
        function onPopupHide() {
            document.removeEventListener('rotarydetent', onRotaryDetent);

            // reset view
            setActiveTimePart(TIME_PART_HOUR);
        }

        /**
         * Handles click on popup's content.
         * @param {Event} ev
         */
        function onPopupContentClick(ev) {
            var container = domHelper.closest(ev.target, '.time-container'),
                timePart = '';

            if (!container) {
                return;
            }

            timePart = container.getAttribute('data-time-part');

            if (!timePart) {
                return;
            }

            setActiveTimePart(timePart);
        }

        /**
         * Handles "click" event on date confirm button.
         */
        function onTimeConfirmBtnClick() {
            systemTime.setTime(currentTime.getTime());
            e.fire('system.time.changed');
            tau.closePopup();
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            timePopup.addEventListener('popupbeforeshow',
                onPopupBeforeShow);
            timePopup.addEventListener('popuphide',
                onPopupHide);
            timePopup.querySelector('.ui-popup-content')
                .addEventListener('click', onPopupContentClick);
            timePopup.querySelector('#time-confirm-btn')
                .addEventListener('click', onTimeConfirmBtnClick);

            e.listeners({
                'views.setTime.time.part.changed': onActiveTimePartChanged,
                'views.setTime.hour.part.activated': onHourPartActivated,
                'views.setTime.minute.part.activated': onMinutePartActivated,
                'views.setTime.hand.angle.changed': onHandAngleChanged,
                'views.setTime.time.changed': onCurrentTimeChanged
            });
        }

        /**
         * Returns current system date.
         * @return {Date}
         */
        function getTime() {
            return new Date(systemTime.valueOf());
        }

        /**
         * Initializes module.
         */
        function init() {
            if (!systemTime) {
                systemTime = new Date();
            }

            timePopup = document.getElementById('time-popup');
            faceLayerContext = timePopup.querySelector('.face-layer canvas')
                .getContext('2d');

            handLayerElement = timePopup.querySelector('.hand-layer');
            handLayerContext = handLayerElement.querySelector('canvas')
                .getContext('2d');

            bindEvents();
        }

        return {
            getTime: getTime,
            init: init
        };
    }
});
