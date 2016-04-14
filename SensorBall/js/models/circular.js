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
 * Circular screen model.
 */

define(
    'models/circular',
    function circularInit() {
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
             * Vibrate threshold from wall.
             * @type {number}
             */
            VIBRATE_THRESHOLD = 5,

            /**
             * Was ball on screen edge.
             * @type {boolean}
             */
            wasOnEdge = false,

            /**
             * Should device vibrate.
             * @type {boolean}
             */
            shouldVibrate = false;

        /**
         * Setups module.
         * @param {object} gameFieldData
         */
        function setup(gameFieldData) {
            gameField = gameFieldData;
        }

        /**
         * Sets data for this module.
         * @param {object} ballData
         * @param {object} vData
         */
        function setData(ballData, vData) {
            ball = ballData;
            v = vData;
            shouldVibrate = false;
        }

        /**
         * Gets data from this module.
         * @returns {{ballData: object, vData: object, vibrateData: boolean}}
         */
        function getData() {
            return {
                ballData: ball,
                vData: v,
                vibrateData: shouldVibrate
            };
        }

        /**
         * Returns distance between two points.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @returns {number}
         */
        function distance(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        }

        /**
         * Checks if ball is in circle.
         * @param {number} x
         * @param {number} y
         * @returns {boolean}
         */
        function isInCircle(x, y) {
            var dist = distance(x, y, gameField.x, gameField.y);

            // If distance is lower than radius difference
            // then ball is in circle
            if (dist <= Math.abs(gameField.r - ball.r)) {
                return true;
            }
            return false;
        }

        /**
         * Returns normalized vector.
         * @param {object} vector
         * @returns {object}
         */
        function normalize(vector) {
            var len = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y)),
                normalized = {};

            normalized.x = vector.x / len;
            normalized.y = vector.y / len;

            return normalized;
        }

        /**
         * Reflects vector after wall hit.
         */
        function reflect() {
            /**
             * Normal vector, perpendicular to the wall.
             * @type {Object}
             */
            var N = normalize({
                    x: ball.x - gameField.x,
                    y: ball.y - gameField.y
                }),
                /**
                 * Calculate the value of the perpendicular velocity component.
                 * @type {number}
                 */
                vP = v.x * N.x + v.y * N.y;

            /**
             * Calculate ball speed after reflection.
             *
             * v = v - 2 * vP * N
             * @see http://www.3dkingdoms.com/weekly/weekly.php?a=2
             */
            v.x = v.x - 2 * vP * N.x;
            v.y = v.y - 2 * vP * N.y;
        }

        /**
         * Checks if the ball is within game field boundaries and hits the edge.
         */
        function checkGameFieldBoundaries() {
            var pX = ball.x + v.x,
                pY = ball.y + v.y,
                dist = 0,
                maxDist;

            if (isInCircle(pX, pY)) {
                if (wasOnEdge) {
                    dist = distance(pX, pY, gameField.x, gameField.y);
                    maxDist = gameField.r - ball.r - VIBRATE_THRESHOLD;
                    if (dist < maxDist) {
                        wasOnEdge = false;
                    }
                }
                ball.x += v.x;
                ball.y += v.y;
            } else {
                if (!wasOnEdge) {
                    wasOnEdge = true;
                    shouldVibrate = true;
                }
                reflect();
            }
        }

        return {
            setup: setup,
            setData: setData,
            getData: getData,
            checkGameFieldBoundaries: checkGameFieldBoundaries
        };
    }
);
