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

/*global define, window, console, document*/

/**
 * Space view module
 */

define(
    'views/space',
    [
        'models/space'
    ],
    function appInit(spaceModel) {
        'use strict';

        /**
         * Space model object.
         * @type {Object}
         */
        var model = spaceModel,

            /**
             * Earth element.
             * @type {HTMLElement}
             */
            earth,

            /**
             * Sun element.
             * @type {HTMLElement}
             */
            sun,

            /**
             * Background element.
             * @type {HTMLElement}
             */
            background,

            /**
             * Space background class name.
             * @type {string}
             */
            BACKGROUND_CLASS = 'space-background',

            /**
             * Earth size in pixels.
             * @type {number}
             */
            EARTH_SIZE = 50,

            /**
             * Earth class name.
             * @type {string}
             */
            EARTH_CLASS = 'space-earth',

            /**
             * Sun object id.
             * @type {string}
             */
            SPACE_SUN_ID = 'sun',

            /**
             * Sun object size.
             * @type {number}
             */
            SUN_SIZE = 100,

            /**
             * Sun class name.
             * @type {string}
             */
            SUN_CLASS = 'space-sun';

        /**
         * Sets earth element.
         */
        function setEarthElement() {
            earth = document.getElementById('ball');
        }

        /**
         * Sets earth element size.
         */
        function setEarthSize() {
            earth.style.width = EARTH_SIZE + 'px';
            earth.style.height = EARTH_SIZE + 'px';
        }

        /**
         * Sets earth element position with given coordinates.
         * @param {Object} position
         */
        function setEarthPosition(position) {
            earth.style.left = position.x + 'px';
            earth.style.top = position.y + 'px';
        }

        /**
         * Adds proper class to earth element.
         */
        function addEarthClass() {
            earth.classList.add(EARTH_CLASS);
        }

        /**
         * Removes proper class from earth element.
         */
        function removeEarthClass() {
            earth.classList.remove(EARTH_CLASS);
        }

        /**
         * Adds sun element to document.
         */
        function addSunElement() {
            sun = document.createElement('img');
            sun.id = SPACE_SUN_ID;
            sun.classList.add(SUN_CLASS);
            sun.style.height = SUN_SIZE;
            sun.style.width = SUN_SIZE;
            document.getElementById('mainPage').appendChild(sun);
        }

        /**
         * Removes sun element from document.
         */
        function removeSunElement() {
            document.getElementById('mainPage').removeChild(sun);
        }

        /**
         * Sets sun element position with given coordinates.
         * @param {Object} position
         */
        function setSunPosition(position) {
            sun.style.left = position.x + 'px';
            sun.style.top = position.y + 'px';
        }

        /**
         * Adds proper class to background element.
         */
        function addBackgroundClass() {
            background.classList.add(BACKGROUND_CLASS);
        }

        /**
         * Removes proper class from backgrounde element.
         */
        function removeBackgroundClass() {
            background.classList.remove(BACKGROUND_CLASS);
        }

        /**
         * Sets background element.
         */
        function setBackgroundElement() {
            background = document.getElementById('background');
        }

        /**
         * Sets background element position with given coordinates.
         * @param {Object} position
         */
        function setBackgroundPosition(position) {
            background.style.backgroundPositionY = position.top + 'px';
            background.style.backgroundPositionX = position.left + 'px';
        }

        /**
         * Clears background element background position.
         */
        function resetBackgroundPosition() {
            background.style.backgroundPosition = '0px 0px';
        }

        /**
         * Returns background size.
         * @return {Object}
         */
        function getBackgroundSize() {
            var result = {},
                background = document.getElementById('background');
            result.width =  window.getComputedStyle(background).width;
            result.height =  window.getComputedStyle(background).height;
            return result;
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
         * Adjusts earth visibility.
         * Function manipulate on earth element z-index.
         * @param {boolean} isEarthAboveSun
         */
        function adjustEarthVisibility(isEarthAboveSun) {
            if (isEarthAboveSun) {
                earth.style.zIndex = 100;
            } else {
                earth.style.zIndex = 20;
            }
        }

        /**
         * Starts space view.
         */
        function start() {
            model.setup({
                earthSize: EARTH_SIZE,
                sunSize: SUN_SIZE,
                backgroundSize: getBackgroundSize(),
                gameSize: getGameFieldDimensions()
            });

            setEarthElement();
            setEarthSize();
            addEarthClass();
            addSunElement();
            setBackgroundElement();
            addBackgroundClass();
        }

        /**
         * Cleanups view elements.
         */
        function cleanup() {
            removeSunElement();
            removeEarthClass();
            removeBackgroundClass();
            resetBackgroundPosition();
        }

        /**
         * Renders space view frame.
         */
        function drawFrame() {
            var data = model.getData();
            setEarthPosition(data.earthPosition);
            setSunPosition(data.sunPosition);
            setBackgroundPosition(data.backgroundPosition);
            adjustEarthVisibility(data.isEarthAboveSun);
        }

        return {
            start: start,
            cleanup: cleanup,
            drawFrame: drawFrame
        };
    }
);
