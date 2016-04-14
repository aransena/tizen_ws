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

/*global  define, console, document, $ */

/**
 * Sky view module
 */

define(
    'views/sky',
    [
        'models/gravity'
    ],
    function skyInit(req) {
        'use strict';

        /**
         * Sky model object.
         * @type {Object}
         */
        var model = req,

            /**
             * Sky balloon element.
             * @type {HTMLElement}
             */
            balloon = null,

            /**
             * Sky background class name.
             * @type {string}
             */
            BACKGROUND_CLASS = 'sky-background',

            /**
             * Sky ball size in pixels.
             * @type {number}
             */
            BALLOON_SIZE = 100,

            /**
             * Sky ball class name.
             * @type {string}
             */
            BALLOON_CLASS = 'sky-ball';

        /**
         * Sets balloon element.
         */
        function setBalloonElement() {
            balloon = document.getElementById('ball');
        }

        /**
         * Adds balloon class to balloon element.
         */
        function addBalloonClass() {
            balloon.classList.add(BALLOON_CLASS);
        }

        /**
         * Removes balloon class from balloon element.
         */
        function removeBalloonClass() {
            balloon.classList.remove(BALLOON_CLASS);
        }

        /**
         * Sets balloon element size.
         */
        function setBalloonSize() {
            balloon.style.width = BALLOON_SIZE + 'px';
            balloon.style.height = BALLOON_SIZE + 'px';
        }

        /**
         * Sets balloon element position with given coordinates.
         * @param {number} x
         * @param {number} y
         */
        function setBalloonPosition(x, y) {
            balloon.style.left = x + 'px';
            balloon.style.top = y + 'px';
        }

        /**
         * Adds background class.
         */
        function addBackgroundClass() {
            document.getElementById('background')
                .classList.add(BACKGROUND_CLASS);
        }

        /**
         * Removes background class.
         */
        function removeBackgroundClass() {
            document.getElementById('background')
                .classList.remove(BACKGROUND_CLASS);
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
         * Starts sky view.
         */
        function start(screenModel) {
            var page = document.getElementById('mainPage');

            model.setup({
                ballData: {
                    x: page.clientWidth / 2 - BALLOON_SIZE / 2,
                    y: page.clientHeight / 2 - BALLOON_SIZE / 2,
                    size: BALLOON_SIZE
                },
                gameSize: getGameFieldDimensions(),
                screenModel: screenModel,
                sky: true
            });
            setBalloonElement();
            addBalloonClass();
            setBalloonSize();
            addBackgroundClass();
        }

        /**
         * Cleans up view elements.
         */
        function cleanup() {
            removeBalloonClass();
            removeBackgroundClass();
        }

        /**
         * Renders sky view frame.
         */
        function drawFrame() {
            var data = model.getData();
            setBalloonPosition(data.x, data.y);
        }

        return {
            start: start,
            cleanup: cleanup,
            drawFrame: drawFrame
        };
    }
);
