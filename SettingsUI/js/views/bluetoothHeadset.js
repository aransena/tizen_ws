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

/*global define, document, tau, setInterval, clearInterval*/

/**
 * Bluetooth headset view module.
 */
define({
    name: 'views/bluetoothHeadset',
    requires: [
        'helpers/list'
    ],
    def: function bluetoothHeadset(listHelper) {
        'use strict';

        /**
         * Page element.
         * @type {HTMLElement}
         */
        var page = null,

            /**
             * Scanning interval.
             * @type {object}
             */
            scanningInterval = null,

            /**
             * Bluetooth headset result element.
             * @type {HTMLElement}
             */
            bluetoothHeadsetResult = null,

            /**
             * Bluetooth headset footer button element.
             * @type {HTMLElement}
             */
            bluetoothHeadsetFooterBtn = null,

            /**
             * Scanning counter.
             * @type {number}
             */
            scanningCounter = 0,

            /**
             * Scanning max time.
             * @type {number}
             */
            SCANNING_MAX_TIME = 5;

        /**
         * Updates UI.
         */
        function updateUI() {
            if (scanningInterval) {
                bluetoothHeadsetResult.innerText = 'Scanning...';
                bluetoothHeadsetFooterBtn.innerText = 'STOP';
            } else {
                bluetoothHeadsetResult.innerText = 'None found';
                bluetoothHeadsetFooterBtn.innerText = 'SCAN';
            }
        }

        /**
         * Stops scanning for bluetooth devices.
         */
        function stopScanning() {
            clearInterval(scanningInterval);
            scanningCounter = 0;
            scanningInterval = null;
        }

        /**
         * Increments scanning counter.
         */
        function incrementScanningCounter() {
            scanningCounter += 1;

            if (scanningCounter < SCANNING_MAX_TIME) {
                return;
            }

            stopScanning();
            updateUI();
        }

        /**
         * Starts scanning for bluetooth devices.
         */
        function startScanning() {
            scanningInterval = setInterval(incrementScanningCounter, 1000);
        }

        /**
         * Handles "pagebeforeshow" event.
         */
        function onPageBeforeShow() {
            startScanning();
            updateUI();
        }

        /**
         * Handles "pagehide" event.
         */
        function onPageHide() {
            stopScanning();
        }

        /**
         * Handles click event on bluetooth headset footer button.
         */
        function onBluetoothHeadsetFooterBtnClick() {
            if (scanningInterval) {
                stopScanning();
            } else {
                startScanning();
            }
            updateUI();
        }

        /**
         * Registers module's event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            page.addEventListener('pagehide', onPageHide);
            bluetoothHeadsetFooterBtn.addEventListener(
                'click',
                onBluetoothHeadsetFooterBtnClick
            );
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('bluetooth-headset');
            bluetoothHeadsetResult = page.querySelector(
                '#bluetooth-headset-result'
            );
            bluetoothHeadsetFooterBtn = page.querySelector(
                '#bluetooth-headset-footer-btn'
            );
            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init
        };
    }
});
