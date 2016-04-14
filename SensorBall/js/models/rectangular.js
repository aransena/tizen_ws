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
 * Rectangular screen model.
 */

define(
    'models/rectangular',
    function gravityInit() {
        'use strict';

        /**
         * Gravity ball data.
         * @type {{x: number, y: number, r: number}}
         */
        var ball = {
                x: 0,
                y: 0,
                r: 0
            },

            /**
             * Ball width.
             * @type {number}
             */
            ballWidth = 0,

            /**
             * Ball height.
             * @type {number}
             */
            ballHeight = 0,

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
             * Determines if the ball is on the game field edges now.
             * @type {Object}
             */
            isBallOnEdges = {
                x: false,
                y: false
            },

            /**
             * Determines if the ball previously hits game field edges.
             * @type {Object}
             */
            wasBallOnEdges = {
                x: false,
                y: false
            },

            /**
             * Bounce side friction.
             * @type {number}
             */
            sideFriction = 0,

            /**
             * Bounce friction.
             * @type {number}
             */
            elasticity = 0,

            /**
             * Coefficient of friction.
             * @type {number}
             */
            elasticityC = 0;

        /**
         * Setups module.
         * @param {object} gameFieldData
         * @param {number} sideFrictionData
         * @param {number} elasticityData
         * @param {number} elasticityCData
         */
        function setup(gameFieldData, sideFrictionData,
                       elasticityData, elasticityCData) {
            gameField = gameFieldData;
            sideFriction = sideFrictionData;
            elasticity = elasticityData;
            elasticityC = elasticityCData;
        }

        /**
         * Sets data for this module.
         * @param {object} ballData
         * @param {object} vData
         */
        function setData(ballData, vData) {
            ball = ballData;
            ball.x = ball.x - ball.r;
            ball.y = ball.y - ball.r;
            ballWidth = ballData.r * 2;
            ballHeight = ballData.r * 2;
            v = vData;
        }

        /**
         * Check if the ball coordinates are above the game field edges
         * and updates proper object.
         */
        function checkIfBallWasOnEdges() {
            wasBallOnEdges.x = false;
            wasBallOnEdges.y = false;

            if (ball.x <= 0) {
                wasBallOnEdges.x = true;
            } else if ((ball.x + ballWidth) >= gameField.width) {
                wasBallOnEdges.x = true;
            }
            if (ball.y <= 0) {
                wasBallOnEdges.y = true;
            } else if ((ball.y + ballHeight) >= gameField.height) {
                wasBallOnEdges.y = true;
            }
        }

        /**
         * Returns if the ball is hitting the edge.
         * @return {boolean}
         */
        function isBallHittingEdge() {
            if ((!wasBallOnEdges.x && isBallOnEdges.x) ||
                (!wasBallOnEdges.y && isBallOnEdges.y)) {
                return true;
            }
            return false;
        }

        /**
         * Gets data from this module.
         * @returns {{ballData: object, vData: object, vibrateData: boolean}}
         */
        function getData() {
            ball.x = ball.x + ball.r;
            ball.y = ball.y + ball.r;
            return {
                ballData: ball,
                vData: v,
                vibrateData: isBallHittingEdge()
            };
        }

        /**
         * Checks if the ball is within game field boundaries and hits the edge.
         */
        function checkGameFieldBoundaries() {
            var stickTop = 0,
                stickLeft = 0,
                stickBottom = 0,
                stickRight = 0;

            isBallOnEdges.x = false;
            isBallOnEdges.y = false;

            checkIfBallWasOnEdges();

            ball.x += v.x;
            ball.y += v.y;

            if (ball.x < 0) {
                ball.x = 0;
                v.x = Math.abs(v.x) * elasticity - elasticityC;
                v.y *= sideFriction;
                stickLeft = true;
            } else if ((ball.x + ballWidth) > gameField.width) {
                ball.x = gameField.width - ballWidth;
                v.x = -Math.abs(v.x) * elasticity + elasticityC;
                v.y *= sideFriction;
                stickRight = true;
                if (ball.x < 0) {
                    ball.x = 0;
                }
            }

            if (ball.y < 0) {
                ball.y = 0;
                v.y = Math.abs(v.y) * elasticity - elasticityC;
                v.y *= sideFriction;
                stickTop = true;
            } else if ((ball.y + ballHeight) > gameField.height) {
                ball.y = gameField.height - ballHeight;
                v.y = -Math.abs(v.y) * elasticity + elasticityC;
                v.x *= sideFriction;
                stickBottom = true;
                if (ball.y < 0) {
                    ball.y = 0;
                }
            }

            isBallOnEdges.x =
            (stickLeft || stickRight) && Math.abs(v.x) > 1;
            isBallOnEdges.y =
            (stickTop || stickBottom) && Math.abs(v.y) > 1;
        }


        return {
            setup: setup,
            setData: setData,
            getData: getData,
            checkGameFieldBoundaries: checkGameFieldBoundaries
        };
    }
);
