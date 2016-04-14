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

/*global console, define, window, document, navigator*/

/**
 * Gravity view module
 */

define(
    'views/gravity',
    [
        'models/gravity'
    ],
    function gravityInit(req) {
        'use strict';

        /**
         * Gravity model object.
         * @type {Object}
         */
        var model = req,

            /**
             * Gravity ball element.
             * @type {HTMLElement}
             */
            ball = null,

            /**
             * Gravity background class name.
             * @type {string}
             */
            GRAVITY_BACKGROUND_CLASS = 'gravity-background',

            /**
             * Gravity ball size in pixels.
             * @type {number}
             */
            GRAVITY_BALL_SIZE = 86,

            /**
             * Gravity ball class name.
             * @type {string}
             */
            GRAVITY_BALL_CLASS = 'gravity-ball';

        /**
         * Sets ball element.
         */
        function setBallElement() {
            ball = document.getElementById('ball');
        }

        /**
         * Adds ball class to ball element.
         */
        function addBallClass() {
            ball.classList.add(GRAVITY_BALL_CLASS);
        }

        /**
         * Removes ball class from ball element.
         */
        function removeBallClass() {
            ball.classList.remove(GRAVITY_BALL_CLASS);
        }

        /**
         * Sets ball element size.
         */
        function setBallSize() {
            ball.style.width = GRAVITY_BALL_SIZE + 'px';
            ball.style.height = GRAVITY_BALL_SIZE + 'px';
        }

        /**
         * Sets ball element position with given coordinates.
         * @param {number} x
         * @param {number} y
         */
        function setBallPosition(x, y) {
            ball.style.left = x + 'px';
            ball.style.top = y + 'px';
        }

        /**
         * Adds background class to background element.
         */
        function addBackgroundClass() {
            document.getElementById('background')
                .classList.add(GRAVITY_BACKGROUND_CLASS);
        }

        /**
         * Removes background class from background element.
         */
        function removeBackgroundClass() {
            document.getElementById('background')
                .classList.remove(GRAVITY_BACKGROUND_CLASS);
        }

        /**
         * Returns game field dimensions
         * @return {Object}
         */
        function getGameFieldDimensions() {
            var result = {},
                page = document.getElementById('mainPage');
            result.width = page.clientWidth;
            result.height = page.clientHeight;
            return result;
        }

        /**
         * Launches device vibration for 100ms.
         */
        function vibrate() {
            if (typeof navigator.webkitVibrate === 'function') {
                navigator.webkitVibrate(100);
            } else {
                navigator.vibrate(100);
            }
        }

        /**
         * Starts gravity view.
         */
        function start(screenModel) {
            var page = document.getElementById('mainPage');

            model.setup({
                ballData: {
                    x: page.clientWidth / 2 - GRAVITY_BALL_SIZE / 2,
                    y: page.clientHeight / 2 - GRAVITY_BALL_SIZE / 2,
                    size: GRAVITY_BALL_SIZE
                },
                gameSize: getGameFieldDimensions(),
                screenModel: screenModel
            });
            setBallElement();
            addBallClass();
            setBallSize();
            addBackgroundClass();
        }

        /**
         * Cleanups view elements.
         */
        function cleanup() {
            removeBallClass();
            removeBackgroundClass();
        }

        /**
         * Renders gravity view frame.
         */
        function drawFrame() {
            var data = model.getData();
            setBallPosition(data.x, data.y);
            if (data.vibrate) {
                vibrate();
            }
        }

        return {
            start: start,
            cleanup: cleanup,
            drawFrame: drawFrame
        };
    }
);
