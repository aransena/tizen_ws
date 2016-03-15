/*
 * Copyright (c) 2015 Samsung Electronics Co., Ltd. All rights reserved.
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

/*global define, console, window, tizen, webapis*/

/**
 * Heart Rate Monitor module.
 * @requires {@link core/event}
 * @requires {@link core/storage/idb}
 * @namespace HeartRateMonitor/models/heartRate
 * @memberof HeartRateMonitor/models
 */

define({
    name: 'models/heartRate',
    requires: [
        'core/event',
        'core/storage/idb'
    ],
    def: function modelsHeartRate(req) {
        'use strict';

        /**
         * Core storage idb module object.
         * @type {Module}
         */
        var st = req.core.storage.idb,

            /**
             * Core event module object.
             * @type {Module}
             */
            ev = req.core.event,

            /**
             * Value of current heart rate.
             * @type {object}
             */
            heartRate = null,

            /**
             * Object represents Heart Rate Monitor data.
             * @type {object}
             */
            heartRateData = {},

            /**
             * Specifies the human activity monitor type.
             * @type {string}
             */
            CONTEXT_TYPE = 'HRM',

            /**
             * Specifies the set limit key in storage.
             * @type {string}
             */
            STORAGE_IDB_KEY = 'limit';

        /**
         * Sets heart rate and time values received from sensor.
         * @param {heartRateInfo} heartRateInfo
         * @return {object} heartRateData
         */
        function setHeartRateData(heartRateInfo) {
            var pData = {
                rate: heartRateInfo.heartRate,
                rrinterval: heartRateInfo.rRInterval
            };

            heartRateData = pData;
            return pData;
        }

        /**
         * Returns last received motion data.
         * @return {object}
         */
        function getData() {
            return heartRateData;
        }

        /**
         * Resets heart rate data.
         */
        function resetData() {
            heartRateData = {
                rate: '-',
                rrinterval: '-'
            };
        }

        /**
         * Handles change event on current heart rate.
         * @param {heartRateInfo} heartRateInfo
         * @fires 'change'
         */
        function handleHeartRateInfo(heartRateInfo) {
            setHeartRateData(heartRateInfo);

            ev.fire('change', getData());
        }

        /**
         * Starts the sensor and registers a change listener.
         * @memberof HeartRateMonitor/models/heartRate
         */
        function start() {
            resetData();
            heartRate.start(
                CONTEXT_TYPE,
                function onSuccess(heartRateInfo) {
                    handleHeartRateInfo(heartRateInfo);
                },
                function onError(error) {
                    console.log('error: ', error.message);
                }
            );
        }

        /**
         * Stops the sensor and unregisters a previously registered listener.
         * @memberof HeartRateMonitor/models/heartRate
         */
        function stop() {
            heartRate.stop(CONTEXT_TYPE);
        }

        /**
         * Reads limit value from storage, what fires 'core.storage.idb.read'.
         * @memberof HeartRateMonitor/models/heartRate
         */
        function getLimit() {
            st.get(STORAGE_IDB_KEY);
        }

        /**
         * Set limit value in storage.
         * @memberof HeartRateMonitor/models/heartRate
         */
        function setLimit(value) {
            st.set(STORAGE_IDB_KEY, value);
        }

        /**
         * Handles 'core.storage.idb.write' event.
         */
        function onWriteLimit() {
            ev.fire('setLimit');
        }

        /**
         * Handles 'core.storage.idb.read' event.
         */
        function onReadLimit(e) {
            ev.fire('getLimit', e);
        }

        /**
         * Initializes the module.
         * @memberof HeartRateMonitor/models/heartRate
         */
        function init() {
            resetData();
            if (st.isReady()) {
                getLimit();
            } else {
                ev.listen('core.storage.idb.open', getLimit);
            }

            heartRate = (tizen && tizen.humanactivitymonitor) ||
            (window.webapis && window.webapis.motion) || null;
        }

        ev.on({
            'core.storage.idb.write': onWriteLimit,
            'core.storage.idb.read': onReadLimit
        });

        return {
            init: init,
            start: start,
            stop: stop,
            getLimit: getLimit,
            setLimit: setLimit
        };
    }

});
