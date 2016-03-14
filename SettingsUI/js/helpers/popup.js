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

/*global define, tau, setTimeout*/

/**
 * Popup helper module.
 */
define({
    name: 'helpers/popup',
    requires: [],
    def: function popupHelper() {
        'use strict';

        /**
         * Resets scroll of the popup element.
         * @param {number} [position=0]
         */
        function resetScroll(position) {
            /*jshint validthis:true*/
            var self = this;

            setTimeout(function onTimeout() {
                self.querySelector('.ui-popup-wrapper')
                    .scrollTop = position || 0;
            }, 0);
        }

        /**
         * Handles popupbeforeshow event on given popup element.
         * @param {HTMLElement} popup
         * @param {number} [position=0]
         */
        function resetScrollBeforeOpen(popup, position) {
            popup.addEventListener(
                'popupbeforeshow',
                resetScroll.bind(popup, position)
            );
        }

        return {
            resetScrollBeforeOpen: resetScrollBeforeOpen
        };
    }
});
