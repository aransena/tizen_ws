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

/*global define, console, document, tau*/

/**
 * Main page module.
 * @requires {@link core/event}
 * @requires {@link Altimeter/models/settings}
 * @requires {@link Altimeter/models/pressure}
 * @requires {@link core/application}
 * @namespace Altimeter/views/main
 * @memberof Altimeter/views
 */

define({
    name: 'views/main',
    requires: [
        'core/event',
        'models/settings',
        'models/pressure',
        'core/application'
    ],
    def: function viewsMainPage(req) {
        'use strict';

        /**
         * Core event module.
         * @type {Module}
         */
        var e = req.core.event,

            /**
             * Pressure module.
             * @type {Module}
             */
            sensor = req.models.pressure,

            /**
             * Settings module.
             * @type {Module}
             */
            settings = req.models.settings,

            /**
             * Core event module.
             * @type {Module}
             */
            app = req.core.application,

            /**
             * Popup message.
             * @type {string}
             */
            ARE_YOU_SURE_MSG = 'Are you sure you want to calibrate device?',

            /**
             * Popup message.
             * @type {string}
             */
            SENSOR_NOT_AVAILABLE_MSG = 'Pressure sensor is not available.',

            /**
             * Popup message.
             * @type {string}
             */
            SENSOR_NOT_SUPPORTED_MSG = 'Pressure sensor is not supported ' +
                'on this device.',

            /**
             * Popup message.
             * @type {string}
             */
            SENSOR_UNKNOWN_ERROR_MSG = 'Unknown sensor error occurs.',

            /**
             * Reference to the popup message element.
             * @type {HTMLElement}
             */
            calibrationMessage = null,

            /**
             * Reference to the 'Calibration' button.
             * @type {HTMLElement}
             */
            calibrationBtn = null,

            /**
             * Reference to the 'Yes' button.
             * @type {HTMLElement}
             */
            yesBtn = null,

            /**
             * Reference to the 'No' button.
             * @type {HTMLElement}
             */
            noBtn = null,

            /**
             * Reference to the 'reference' element.
             * @type {HTMLElement}
             */
            referenceValue = null,

            /**
             * Reference to the 'pressure' element.
             * @type {HTMLElement}
             */
            pressureValue = null,

            /**
             * Reference to the 'altitude' element.
             * @type {HTMLElement}
             */
            altitudeValue = null,

            /**
             * Reference to the 'alert' popup.
             * @type {HTMLElement}
             */
            alertElement = null,

            /**
             * Reference to the alert message element.
             * @type {HTMLElement}
             */
            alertMessage = null,

            /**
             * Reference to the 'ok' button on the alert popup.
             * @type {HTMLElement}
             */
            alertOk = null,

            /**
             * Reference to the 'calibration' popup.
             * @type {HTMLElement}
             */
            popupCalibration = null;

        /**
         * Updates reference pressure value.
         */
        function updateReferenceValue() {
            referenceValue.innerText = settings.get('pressure').toFixed(2);
        }

        /**
         * Updates current pressure value.
         * @param {number} value
         */
        function updatePressureValue(value) {
            pressureValue.innerText = value.toFixed(2);
        }

        /**
         * Updates altitude value.
         * @param {number} value
         */
        function updateAltitudeValue(value) {
            var reference = settings.get('pressure'),
                text = '',
                altitude = -8727 * Math.log(value / reference);

            text = altitude.toFixed(0);
            if (text === '-0') {
                text = '0';
            }
            altitudeValue.innerText = text;
        }

        /**
         * Resets altitude value.
         */
        function resetAltitudeValue() {
            altitudeValue.innerText = '0';
        }

        /**
         * Shows application working space.
         */
        function showWorkingSpace() {
            updateReferenceValue();
        }

        /**
         * Shows application start monit.
         */
        function showCalibrationMonit() {
            tau.openPopup(popupCalibration);
        }

        /**
         * Calibrates pressure.
         */
        function calibratePressure() {
            settings.set('pressure', sensor.getAverageSensorValue());
            resetAltitudeValue();
            updateReferenceValue();
        }

        /**
         * Shows alert popup.
         * @param {string} message Message.
         */
        function openAlert(message) {
            alertMessage.innerHTML = message;
            tau.openPopup(alertElement);
        }

        /**
         * Handles click event on calibration button.
         */
        function onCalibrationBtnClick() {
            calibrationMessage.innerHTML = ARE_YOU_SURE_MSG;
            showCalibrationMonit();
        }

        /**
         * Handles click event on yes button.
         */
        function onYesBtnClick() {
            tau.closePopup();
            showWorkingSpace();
            calibratePressure();
        }

        /**
         * Handles click event on no button.
         */
        function onNoBtnClick() {
            tau.closePopup();
            showWorkingSpace();
        }

        /**
         * Handles sensor.start event.
         */
        function onSensorStart() {
            showCalibrationMonit();
        }

        /**
         * Handles models.pressure.error event.
         * @param {object} data
         */
        function onSensorError(data) {
            var type = data.detail.type;

            if (type === 'notavailable') {
                openAlert(SENSOR_NOT_AVAILABLE_MSG);
            } else if (type === 'notsupported') {
                openAlert(SENSOR_NOT_SUPPORTED_MSG);
            } else {
                openAlert(SENSOR_UNKNOWN_ERROR_MSG);
            }
        }

        /**
         * Handles sensor.change event.
         * @param {Event} ev
         */
        function onSensorChange(ev) {
            updatePressureValue(ev.detail.average);
            updateAltitudeValue(ev.detail.average);
        }

        /**
         * Handles device.ready event.
         */
        function onDeviceReady() {
            sensor.initSensor();
            if (sensor.isAvailable()) {
                sensor.setChangeListener();
                sensor.start();
            }
        }

        /**
         * Handles click event on OK button.
         */
        function onOkClick() {
            tau.closePopup();
        }

        /**
         * Handles popupHide event on popup element.
         */
        function onPopupHide() {
            app.exit();
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            calibrationBtn.addEventListener('click', onCalibrationBtnClick);
            yesBtn.addEventListener('click', onYesBtnClick);
            noBtn.addEventListener('click', onNoBtnClick);
            alertElement.addEventListener('popuphide', onPopupHide);
            alertOk.addEventListener('click', onOkClick);
        }

        /**
         * Initializes module.
         * @memberof Altimeter/views/main
         */
        function init() {
            calibrationMessage = document.getElementById(
                'popup-calibration-message'
            );
            calibrationBtn = document.getElementById('calibration-btn');
            yesBtn = document.getElementById(
                'popup-calibration-yes'
            );
            noBtn = document.getElementById(
                'popup-calibration-no'
            );
            referenceValue = document.getElementById('reference-value');
            pressureValue = document.getElementById('current-value');
            altitudeValue = document.getElementById('altitude-value');
            alertElement = document.getElementById('alert');
            alertMessage = document.getElementById('alert-message');
            alertOk = document.getElementById('alert-ok');
            popupCalibration = document.getElementById('popup-calibration');
            bindEvents();
        }

        e.listeners({
            'models.pressure.start': onSensorStart,
            'models.pressure.error': onSensorError,
            'models.pressure.change': onSensorChange,
            'views.init.device.ready': onDeviceReady
        });

        return {
            init: init
        };
    }

});
