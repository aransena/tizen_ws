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

/*global console, define, document, window */

/**
 * Main view module
 */

define(
    'views/main',
    [
        'core/application',
        'models/ball',
        'models/rectangular',
        'models/circular',
        'views/space',
        'views/gravity',
        'views/sky'
    ],
    function appInit(req) {
        'use strict';

        var view = null,

            /**
             * Ball model object.
             * @type {Object}
             */
            ball = req('models/ball'),

            /**
             * Space view object.
             * @type {Object}
             */
            space = req('views/space'),

            /**
             * Gravity view object.
             * @type {Object}
             */
            gravity = req('views/gravity'),

            /**
             * Sky view object.
             * @type {Object}
             */
            sky = req('views/sky'),

            /**
             * Core application module object.
             * @type {Object}
             */
            app = req('core/application'),

            /**
             * Screen model
             * @type {object}
             */
            screenModel = null,

            /**
             * Gravity button id.
             * @type {string}
             */
            GRAVITY_BUTTON_ID = 'btn-gravity',

            /**
             * Sky button id.
             * @type {string}
             */
            SKY_BUTTON_ID = 'btn-sky',

            /**
             * Space button id.
             * @type {string}
             */
            SPACE_BUTTON_ID = 'btn-space',

            /**
             * Last deactivated button id.
             * @type {string}
             */
            lastInactiveButtonId = null,

            /**
             * Timestamp of last calculated animation frame.
             * @type {number}
             */
            lastAnimationTime = null,

            /**
             * Minimum time between two animation frames.
             * @type {number}
             */
            MIN_TIMESTAMP = 20;

        /**
         * Deactivates button with given id.
         * @param {string} buttonId
         */
        function setInactiveButton(buttonId) {
            var clickedButton = document.getElementById(buttonId),
                lastButton = document.getElementById(lastInactiveButtonId);

            if (lastInactiveButtonId) {
                lastButton.disabled = false;
            }
            clickedButton.disabled = true;
            lastInactiveButtonId = buttonId;
        }

        /**
         * Cleanups view elements.
         */
        function cleanup() {
            if (view !== null) {
                view.cleanup();
            }
        }

        /**
         * Starts gravity view.
         */
        function startGravity() {
            setInactiveButton(GRAVITY_BUTTON_ID);
            cleanup();
            view = gravity;
            view.start(screenModel);
        }

        /**
         * Starts sky view.
         */
        function startSky() {
            setInactiveButton(SKY_BUTTON_ID);
            cleanup();
            view = sky;
            view.start(screenModel);
        }

        /**
         * Starts space view.
         */
        function startSpace() {
            setInactiveButton(SPACE_BUTTON_ID);
            cleanup();
            view = space;
            view.start();
        }

        /**
         * Handles animation frame request.
         */
        function animate() {
            var timestamp = new Date().getTime();
            if (lastAnimationTime === null) {
                lastAnimationTime = timestamp - MIN_TIMESTAMP;
            }
            if (timestamp - lastAnimationTime > MIN_TIMESTAMP) {
                lastAnimationTime = timestamp;
                view.drawFrame();
            }
            window.webkitRequestAnimationFrame(animate);
        }

        /**
         * Starts application.
         */
        function start() {
            startGravity(screenModel);
            animate();
        }

        /**
         * Exits application.
         */
        function exit() {
            try {
                app.exit();
            } catch (err) {
                console.error('Error: ', err);
            }
        }

        /**
         * Handles hardware key tap event.
         * @param {Event} event
         */
        function onHardwareKeysTap(event) {
            if (event.keyName === 'back') {
                exit();
            }
        }

        /**
         * Handles device motion event.
         * @param {DeviceMotionEvent} event
         */
        function onDeviceMotion(event) {
            ball.setMotionData(event);
        }

        /**
         * Handles webkit visibility change event.
         */
        function onVisibilityChange() {
            if (document.webkitVisibilityState === 'visible') {
                animate();
            }
        }

        /**
         * Binds events.
         */
        function bindEvents() {
            var gravityButton = document.getElementById(GRAVITY_BUTTON_ID),
                skyButton = document.getElementById(SKY_BUTTON_ID),
                spaceButton = document.getElementById(SPACE_BUTTON_ID);

            window.addEventListener('tizenhwkey', onHardwareKeysTap);
            window.addEventListener('devicemotion', onDeviceMotion);
            document.addEventListener(
                'webkitvisbilitychange',
                onVisibilityChange
            );

            gravityButton.addEventListener('click', function onBallTap() {
                startGravity();
            });

            skyButton.addEventListener('click', function onSkyTap() {
                startSky();
            });

            spaceButton.addEventListener('click', function onSpaceTap() {
                startSpace();
            });

        }

        /**
         * Returns appropriate screen module.
         * @returns {Module}
         */
        function getScreenModel() {
            var mq = window.matchMedia('(-tizen-geometric-shape: circle)');

            if (mq.matches) {
                return req('models/circular');
            }
            return req('models/rectangular');
        }

        /**
         * Initializes view.
         */
        function init() {
            bindEvents();
            screenModel = getScreenModel();
            start();
        }

        return {
            init: init,
            start: start
        };
    }
);
