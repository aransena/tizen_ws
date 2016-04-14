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

/*global define */

/**
 * Gravity model for circle screen module.
 * Performs calculations for the ball in the gravity.
 */

define(
    'models/gravity',
    [
        'models/ball'
    ],
    function gravityInit(req) {
        'use strict';

        /**
         * Ball model module object.
         * @type {Object}
         */
        var ballModel = req,

            /**
             * Screen model depending on screen shape.
             * @type {object}
             */
            screenModel = null,

            /**
             * Gravity ball data.
             * @type {{x: number, y: number, r: number}}
             */
            ball = {
                x: 0,
                y: 0,
                r: 0
            },

            /**
             * Game field data.
             * @type {{x: number, y: number, r: number,
             *         width: number, height: number}}
             */
            gameField = {
                x: 0,
                y: 0,
                r: 0,
                width: 0,
                height: 0
            },

            /**
             * Ball velocity vector.
             * @type {{x: number, y: number}}
             */
            v = {
                x: 0,
                y: 0
            },

            /**
             * Device motion event data.
             * @type {DeviceMotionEvent}
             */
            motionData = null,

            /**
             * Scaling of sensor readings.
             * @type {number}
             */
            cdd = -0.3,

            /**
             * Friction.
             * @type {number}
             */
            friction = 0.98,

            /**
             * Bounce side friction.
             * @type {number}
             */
            sideFriction = 0.95,

            /**
             * Ball elasticity.
             * @type {number}
             */
            elasticity = 0.90,

            /**
             * Coefficient of elasticity.
             * @type {number}
             */
            elasticityC = 0.002,

            /**
             * Should device vibrate.
             * @type {boolean}
             */
            shouldVibrate = false;

        /**
         * Sets ball size.
         * @param {object} data
         */
        function setBallSize(data) {
            ball.x = data.x;
            ball.y = data.y;
            ball.r = data.size / 2;
        }

        /**
         * Sets game field size.
         * @param {Object} size
         */
        function setGameSize(size) {
            var gameWidth = size.width,
                gameHeight = size.height;
            gameField.x = gameWidth / 2;
            gameField.y = gameHeight / 2;
            gameField.r = gameWidth / 2;
            gameField.width = gameWidth;
            gameField.height = gameHeight;
        }

        /**
         * Pushes current ball data to ball model.
         */
        function pushBallData() {
            var data = {};
            data.ballX = ball.x - ball.r;
            data.ballY = ball.y - ball.r;
            data.dX = v.x;
            data.dY = v.y;
            ballModel.setBallData(data);
        }

        /**
         * Sets environmental properties for the gravity mode.
         */
        function setGravityParameters() {
            cdd = -0.3;
            friction = 0.90;
            sideFriction = 0.95;
            elasticity = 0.95;
            elasticityC = 0.002;
        }

        /**
         * Sets environmental properties for the sky mode.
         */
        function setSkyParameters() {
            cdd = 0.05;
            friction = 0.90;
            sideFriction = 0.95;
            elasticity = 0.95;
            elasticityC = 0.002;
        }

        /**
         * Calculates ball velocity including device sensor.
         */
        function calculateVelocity() {
            var x = 0,
                y = 0,
                ddx = 0,
                ddy = 0;

            if (motionData !== null) {
                x = -motionData.accelerationIncludingGravity.x;
                y = -motionData.accelerationIncludingGravity.y;
            }
            ddx = x * -cdd;
            ddy = y * cdd;
            v.x += ddx;
            v.y += ddy;
            v.x *= friction;
            v.y *= friction;
        }

        /**
         * Returns actual coordinates for ball in gravity or sky mode.
         * Returned object contains x and y property.
         * @return {Object}
         */
        function getBallPosition() {
            var result = {},
                data = {};
            motionData = ballModel.getMotionData();
            calculateVelocity();
            screenModel.setData(ball, v);
            screenModel.checkGameFieldBoundaries();
            data = screenModel.getData();
            ball = data.ballData;
            v = data.vData;
            shouldVibrate = data.vibrateData;
            result.x = ball.x - ball.r;
            result.y = ball.y - ball.r;
            return result;
        }

        /**
         * Sets up gravity model properties with given data.
         * @param {Object} data
         */
        function setup(data) {
            setBallSize(data.ballData);
            setGameSize(data.gameSize);
            if (data.hasOwnProperty('sky')) {
                setSkyParameters();
            } else {
                setGravityParameters();
            }
            screenModel = data.screenModel;
            screenModel.setup(gameField, sideFriction, elasticity, elasticityC);
        }

        /**
         * Returns gravity model data.
         * @return {Object}
         */
        function getData() {
            var data = getBallPosition();
            data.vibrate = shouldVibrate;
            shouldVibrate = false;
            pushBallData();
            return data;
        }

        return {
            setup: setup,
            getData: getData
        };
    }
);
