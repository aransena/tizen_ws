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
 * Wi-fi networks view module.
 */
define({
    name: 'views/wifiNetworks',
    requires: [
        'helpers/list'
    ],
    def: function wifiNetworks(listHelper) {
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
             * Scanning result element.
             * @type {HTMLElement}
             */
            scanningResult = null,

            /**
             * Footer button element.
             * @type {HTMLElement}
             */
            footerBtn = null,

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
                scanningResult.innerText = 'Scanning...';
                footerBtn.innerText = 'STOP';
            } else {
                scanningResult.innerText = 'None found';
                footerBtn.innerText = 'SCAN';
            }
        }

        /**
         * Stops scanning for Wi-Fi networks.
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
         * Starts scanning for Wi-Fi networks.
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
         * Handles click event on footer button.
         */
        function onFooterBtnClick() {
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
            footerBtn.addEventListener('click', onFooterBtnClick);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('wifi-networks');
            scanningResult = page.querySelector('#wifi-networks-result');
            footerBtn = page.querySelector('#wifi-networks-footer-btn');
            listHelper.animate(page);
            bindEvents();
        }

        return {
            init: init
        };
    }
});
