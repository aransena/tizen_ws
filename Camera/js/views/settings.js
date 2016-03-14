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
/*jslint plusplus: true*/

/**
 * Settings page module
 */

define({
    name: 'views/settings',
    requires: [
        'core/event'
    ],
    def: function viewsSettings(e) {
        'use strict';

        var page = null,
            pictureSizeBtn = null,
            pictureFormatBtn = null,
            recFormatBtn = null,

            photoMode = true;

        /**
         * Handles views.settings.open event.
         */
        function open() {
            tau.changePage('#settings');
        }

        /**
         * Handles views.settings.show event.
         * @param {event} ev
         */
        function show(ev) {
            photoMode = ev.detail.photoMode;
            tau.changePage('#settings');
        }

        /**
         * Shows picture settings.
         */
        function showPictureSettings() {
            recFormatBtn.classList.add('hidden');
            pictureSizeBtn.classList.remove('hidden');
            pictureFormatBtn.classList.remove('hidden');
        }

        /**
         * Shows recording settings.
         */
        function showRecordingSettings() {
            pictureSizeBtn.classList.add('hidden');
            pictureFormatBtn.classList.add('hidden');
            recFormatBtn.classList.remove('hidden');
        }

        /**
         * Handles pagebeforeshow event.
         */
        function onPageBeforeShow() {
            if (photoMode) {
                showPictureSettings();
            } else {
                showRecordingSettings();
            }
        }

        /**
         * Handles click event on picture-size-btn.
         * @param {event} ev
         */
        function onPictureSizeBtnClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            e.fire('show.pictureSize');
        }

        /**
         * Handles click event on picture-format-btn.
         * @param {event} ev
         */
        function onPictureFormatBtnClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            e.fire('show.pictureFormat');
        }

        /**
         * Handles click event on recording-format-btn.
         * @param {event} ev
         */
        function onRecordingFormatBtnClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            e.fire('show.recordingFormat');
        }

        /**
         * Registers view event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            pictureSizeBtn.addEventListener('click', onPictureSizeBtnClick);
            pictureFormatBtn.addEventListener('click', onPictureFormatBtnClick);
            recFormatBtn.addEventListener('click', onRecordingFormatBtnClick);
        }

        /**
         * Initiates module.
         */
        function init() {
            page = document.getElementById('settings');
            pictureSizeBtn = document.getElementById('picture-size-btn');
            pictureFormatBtn = document.getElementById('picture-format-btn');
            recFormatBtn = document.getElementById('recording-format-btn');
            bindEvents();
        }

        e.listeners({
            'views.main.show.settings': show,
            'views.initPage.settings.open': open
        });

        return {
            init: init
        };
    }

});
