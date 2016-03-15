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

/*global define, console, tizen */

/**
 * Sensor model.
 * @requires {@link core/event}
 * @requires {@link core/window}
 * @namespace Altimeter/models/pressure
 * @memberof Altimeter/models
 */
define({
    name: 'models/pressure',
    requires: [
        'core/event',
        'core/window'
    ],
    def: function modelsPressure(e, window) {
        'use strict';

        /**
         * Reference to the sensor service.
         * @type {SensorService}
         */
        var sensorService = null,

            /**
             * Reference to the pressure sensor.
             * @type {PressureSensor}
             */
            pressureSensor = null,

            /**
             * Name of the sensor type.
             * @type {string}
             */
            SENSOR_TYPE = 'PRESSURE',

            /**
             * Error type name.
             * @type {string}
             */
            ERROR_TYPE_NOT_SUPPORTED = 'NotSupportedError',

            /**
             * Array of registered pressures.
             * @type {number[]}
             */
            previousPressures = [],

            /**
             * Maximum size of the previousPressures array.
             * @type {number}
             */
            MAX_LENGTH = 7,

            /**
             * Average pressure.
             * @type {number}
             */
            averagePressure = 0,

            /**
             * Current pressure.
             * @type {number}
             */
            currentPressure = 0;

        /**
         * Performs action on start sensor success.
         */
        function onSensorStartSuccess() {
            e.fire('start');
        }

        /**
         * Performs action on start sensor error.
         * @param {Error} e
         */
        function onSensorStartError(e) {
            console.error('Pressure sensor start error: ', e);
            e.fire('error', e);
        }

        /**
         * Updates the average pressure value.
         * @param {number} currentPressure
         * @return {number}
         */
        function updateAveragePressure(currentPressure) {
            previousPressures.push(currentPressure);

            var len = previousPressures.length;

            if (len <= MAX_LENGTH) {
                // nothing to shift yet, recalculate whole average
                averagePressure = previousPressures.reduce(function sum(a, b) {
                    return a + b;
                }) / len;
            } else {
                // add the new item and subtract the one shifted out
                averagePressure += (
                    currentPressure - previousPressures.shift()
                ) / len;
            }
            return averagePressure;
        }

        /**
         * Performs action on sensor change.
         * @param {object} data
         */
        function onSensorChange(data) {
            currentPressure = data.pressure;
            updateAveragePressure(currentPressure);
            e.fire('change', {
                current: data.pressure,
                average: averagePressure
            });
        }

        /**
         * Starts sensor.
         * @memberof Altimeter/models/pressure
         */
        function start() {
            pressureSensor.start(onSensorStartSuccess, onSensorStartError);
        }

        /**
         * Sets sensor change listener.
         * @memberof Altimeter/models/pressure
         */
        function setChangeListener() {
            pressureSensor.setChangeListener(onSensorChange);
        }

        /**
         * Returns sensor value.
         * @memberof Altimeter/models/pressure
         */
        function getSensorValue() {
            return currentPressure;
        }

        /**
         * Returns average of several past readings.
         * @memberof Altimeter/models/pressure
         * @return {number}
         */
        function getAverageSensorValue() {
            return averagePressure;
        }

        /**
         * Handles sensor data.
         * @param {object} data
         */
        function setCurrentPressureValue(data) {
            currentPressure = data.pressure;
        }

        /**
         * Returns true if sensor is available, false otherwise.
         * @memberof Altimeter/models/pressure
         * @return {boolean}
         */
        function isAvailable() {
            return !!pressureSensor;
        }

        /**
         * Initializes module.
         * @memberof Altimeter/models/pressure
         */
        function init() {
            sensorService = tizen.sensorservice ||
                (window.webapis && window.webapis.sensorservice) ||
                null;

            if (!sensorService) {
                e.fire('error', {type: 'notavailable'});
            } else {
                try {
                    pressureSensor = sensorService
                        .getDefaultSensor(SENSOR_TYPE);
                    pressureSensor
                        .getPressureSensorData(setCurrentPressureValue);
                } catch (error) {
                    if (error.type === ERROR_TYPE_NOT_SUPPORTED) {
                        e.fire('error', {type: 'notsupported'});
                    } else {
                        e.fire('error', {type: 'unknown'});
                    }
                }
            }
        }

        return {
            initSensor: init,
            start: start,
            isAvailable: isAvailable,
            setChangeListener: setChangeListener,
            getAverageSensorValue: getAverageSensorValue,
            getSensorValue: getSensorValue
        };
    }

});
