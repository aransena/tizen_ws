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

/*global console, define*/
/**
 * Space model module
 */

define(
    'models/space',
    [
        'models/ball'
    ],
    function spaceInit(ballModel) {
        'use strict';

        /**
         * Ball model module object.
         * @type {Object}
         */
        var ball = ballModel,

            /**
             * Gravity constant * m * M.
             * @type {number}
             */
            R = 2000.0,

            /**
             * Device motion event data.
             * @type {DeviceMotionEvent}
             */
            motionData,

            /**
             * Sun element width.
             * @type {number}
             */
            sunWidth = 0,

            /**
             * Sun element height.
             * @type {number}
             */
            sunHeight = 0,

            /**
             * Sun element horizontal coordinate.
             * @type {number}
             */
            sunX = 0,

            /**
             * Sun element vertical coordinate.
             * @type {number}
             */
            sunY = 0,

            /**
             * Earth element horizontal coordinate.
             * @type {number}
             */
            earthX = 0,

            /**
             * Earth element vertical coordinate.
             * @type {number}
             */
            earthY = 0,

            /**
             * Earth element width.
             * @type {number}
             */
            earthWidth = 0,

            /**
             * Earth element height.
             * @type {number}
             */
            earthHeight = 0,

            /**
             * Background width.
             * @type {number}
             */
            backgroundWidth = 0,

            /**
             * Background height.
             * @type {number}
             */
            backgroundHeight = 0,

            /**
             * Horizontal coordinate for background position.
             * @type {number}
             */
            backgroundLeft = 0,

            /**
             * Vertical coordinate for background position.
             * @type (number}
             */
            backgroundTop = 0,

            /**
             * Game field height.
             * @type {number}
             */
            gameHeight = 0,

            /**
             * Game field width.
             * @type {number}
             */
            gameWidth = 0,

            /**
             * Earth horizontal acceleration.
             * @type {number}
             */
            dX = 0,

            /**
             * Earth vertical acceleration.
             * @type {number}
             */
            dY = 0;

        /**
         * Sets sun size.
         * @param {number} size
         */
        function setSunSize(size) {
            sunWidth = size;
            sunHeight = size;
        }

        /**
         * Sets earth size.
         * @param {number} size
         */
        function setEarthSize(size) {
            earthWidth = size;
            earthHeight = size;
        }

        /**
         * Sets background width and height.
         * @param {object} sizes
         */
        function setBackgroundSize(sizes) {
            backgroundWidth = sizes.width;
            backgroundHeight = sizes.height;
        }

        /**
         * Sets game field width and size dimensions.
         * @param {object} sizes
         */
        function setGameSize(sizes) {
            gameWidth = sizes.width;
            gameHeight = sizes.height;
        }

        /**
         * Initialize space sun position.
         */
        function initSunPosition() {
            sunX = (gameWidth - sunWidth) / 2;
            sunY = (gameHeight - sunHeight) / 2;
        }

        /**
         * Pushes earth data to ball model.
         */
        function pushBallData() {
            var data = {};
            data.ballX = earthX;
            data.ballY = earthY;
            data.dX = dX;
            data.dY = dY;
            ball.setBallData(data);
        }

        /**
         * Obtains earth data from ball model.
         */
        function pullBallData() {
            var data = ball.getBallData();
            earthX = data.ballX;
            earthY = data.ballY;
            dX = data.dX;
            dY = data.dY;
        }

        /**
         * Returns background position for space mode.
         * Returned object contains left and top property.
         * @return {Object}
         */
        function getBackgroundPosition() {
            var result = {},

                x = -motionData.accelerationIncludingGravity.x,
                y = -motionData.accelerationIncludingGravity.y,

                rX = -30.0,
                rY = -30.0,

                cX = (gameWidth - backgroundWidth) / 2,
                cY = (gameHeight - backgroundHeight) / 2,

                tX = cX + (-x * rX),
                tY = cY + (y * rY),

                bdX = tX - backgroundLeft,
                bdY = tY - backgroundTop,

                br = 0.2;

            backgroundLeft += bdX * br;
            backgroundTop += bdY * br;

            result.left = backgroundLeft;
            result.top = backgroundTop;

            return result;
        }

        /**
         * Returns sun position for space mode.
         * Returned object contains x and y property.
         * @return {object}
         */
        function getSunPosition() {
            var result = {},

                x = -motionData.accelerationIncludingGravity.x,
                y = -motionData.accelerationIncludingGravity.y,

                rX = -8.0,
                rY = -8.0,

                cX = (gameWidth - sunWidth) / 2,
                cY = (gameHeight - sunHeight) / 2,

                tX = cX + (-x * rX),
                tY = cY + (y * rY),

                bdX = tX - sunX,
                bdY = tY - sunY,

                br = 0.2;

            sunX += bdX * br;
            sunY += bdY * br;

            result.x = sunX;
            result.y = sunY;

            return result;
        }

        /**
         * Decelerates earth object.
         * Function is used when the earth object leaves Sun gravitaion.
         */
        function deceleration() {
            dX *= 0.6;
            dY *= 0.6;
        }

        /**
         * Decelerates earth object if it leaves Sun gravitation space
         * determined by given tolerance.
         * @param {number} tolerance
         */
        function decelerateIfEarthLeavesSunGravitation(tolerance) {
            if (earthX > (gameWidth + tolerance)) {
                earthX = -tolerance;
                deceleration();
            }
            if (earthY > (gameHeight + tolerance)) {
                earthY = -tolerance;
                deceleration();
            }
            if (earthX < -tolerance) {
                earthX = gameWidth + tolerance;
                deceleration();
            }
            if (earthY < -tolerance) {
                earthY = gameHeight + tolerance;
                deceleration();
            }
        }

        /**
         * Calculates and updates Earth object acceleration value.
         */
        function calculateEarthAcceleration() {
            var dXl = 0, // X distance between Sun and Earth
                dYl = 0, // Y distance between Sun and Earth
                d = 0, // distance
                d2 = 0, // distance squared
                ddx = 0, // X acceleration
                ddy = 0; // Y acceleration

            // calculate X and Y distances between the Sun and Earth
            dXl = (sunX + sunWidth / 2 -
                (earthX + (earthWidth / 2))); // x distance
            dYl = (sunY + sunHeight / 2 -
                (earthY + (earthHeight / 2))); // y distance

            if (Math.abs(dXl) < 1) {
                dXl = dXl < 0 ? -1 : 1; // round to 1 * sign
            }
            if (Math.abs(dYl) < 1) {
                dYl = dYl < 0 ? -1 : 1; // round to 1 * sign
            }

            // distance squared
            d2 = Math.pow(dXl, 2) + Math.pow(dYl, 2);
            // distance
            d = Math.sqrt(d2);

            // acceleration is proportional to 1/d2 [a=GM/r^2]
            // X component is also proportional to dXl / d
            ddx = (R * dXl) / (d2 * d);
            ddy = (R * dYl) / (d2 * d);

            // apply acceleration to speed
            dX += ddx;
            dY += ddy;
        }

        /**
         * Calculates and updates Earth object speed value.
         */
        function smoothEarthSpeed() {
            // max speed
            var ratio;
            ratio = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2)) / 25;
            if (ratio > 1) { // speed limit achieved
                dX /= ratio;
                dY /= ratio;
            }

            earthX += dX;
            earthY += dY;
        }

        /**
         * Returns if the earth object is above the sun object.
         * @return {boolean}
         */
        function isEarthAboveSun() {
            var result = false;
            if (dY > 0) {
                result = true;
            }
            return result;
        }

        /**
         * Returns earth position in space environment.
         * @return {Object}
         */
        function getEarthPosition() {
            var result = {},
                borderTolerance = 30;

            calculateEarthAcceleration();
            smoothEarthSpeed();
            decelerateIfEarthLeavesSunGravitation(
                borderTolerance
            );

            result.x = earthX;
            result.y = earthY;

            return result;
        }

        /**
         * Sets up space model properties with given data.
         * @param {Object} data
         */
        function setup(data) {
            setEarthSize(data.earthSize);
            setSunSize(data.sunSize);
            setBackgroundSize(data.backgroundSize);
            setGameSize(data.gameSize);
            pullBallData();
            initSunPosition();
        }

        /**
         * Returns space model data.
         * @returns {Object}
         */
        function getSpaceModelData() {
            var data = {};
            motionData = ball.getMotionData();
            data.earthPosition = getEarthPosition();
            data.sunPosition = getSunPosition();
            data.backgroundPosition = getBackgroundPosition();
            data.isEarthAboveSun = isEarthAboveSun();
            return data;
        }

        /**
         * Returns object containing space model data.
         * @return {Object}
         */
        function getData() {
            pushBallData();
            return getSpaceModelData();
        }

        return {
            getData: getData,
            setup: setup
        };
    }
);
