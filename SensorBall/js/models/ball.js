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
 * Ball model module.
 * Handles ball position and acceleration data.
 */

define(
    'models/ball',
    function modelInit() {
        'use strict';

        /**
         * Ball horizontal position.
         * @type {number}
         */
        var ballX = 0,

            /**
             * Ball vertical position.
             * @type {number}
             */
            ballY = 0,

            /**
             * Ball horizontal velocity.
             * @type {number}
             */
            dX = 0,

            /**
             * Ball vertical velocity.
             * @type {number}
             */
            dY = 0,

            /**
             * Device motion event data.
             * @type {DeviceMotionEvent}
             */
            motionData = null;

        /**
         * Returns ball data.
         * @return {Object}
         */
        function getBallData() {
            var data = {};
            data.ballX = ballX;
            data.ballY = ballY;
            data.dX = dX;
            data.dY = dY;
            return data;
        }

        /**
         * Sets ball data with given values.
         * @param {Object} data
         */
        function setBallData(data) {
            ballX = data.ballX;
            ballY = data.ballY;
            dX = data.dX;
            dY = data.dY;
        }

        /**
         * Sets motion data with given values.
         * @param {DeviceMotionEvent} event
         */
        function setMotionData(event) {
            motionData = event;
        }

        /**
         * Returns motion data.
         * @return {DeviceMotionEvent}
         */
        function getMotionData() {
            return motionData;
        }

        return {
            setMotionData: setMotionData,
            getMotionData: getMotionData,
            getBallData: getBallData,
            setBallData: setBallData
        };
    }
);
