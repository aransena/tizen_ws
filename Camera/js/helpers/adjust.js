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

/*global define, console, Math, window*/

/**
 * Adjust helpers module
 */

define({
    name: 'helpers/adjust',
    def: function helpersAdjust() {
        'use strict';

        /**
         * Returns width and height element
         * @param {HTMLElement} element
         * @return {object} dimensions
         * @return {number} dimensions.w Width of the element
         * @return {number} dimensions.h Height of the element
         */
        function getWidthHeightElement(element) {
            if (element.tagName === 'VIDEO') {
                return {
                    w: element.videoWidth,
                    h: element.videoHeight
                };
            }

            return {
                w: element.naturalWidth,
                h: element.naturalHeight
            };
        }

        /**
         * Adjusts HTML element to fit screen size.
         * @param {HTMLElement} element
         */
        function adjustElement(element) {
            var elementWH = getWidthHeightElement(element),
                W = window.innerWidth,
                H = window.innerHeight,
                isWide = null,
                margin = 0,
                size = 0;

            if (elementWH.h === 0 || H === 0) {
                return;
            }
            isWide = (elementWH.w / elementWH.h >= W / H);
            if (isWide) {
                size = Math.round(elementWH.w * H / elementWH.h);
                margin = (W - size) / 2;
                element.style.marginLeft = margin + 'px';
                element.style.marginTop = '0px';
                element.style.width = size + 'px';
                element.style.height = H + 'px';
            } else {
                size = Math.round(elementWH.h * W / elementWH.w);
                margin = (H - size) / 2;
                element.style.marginLeft = '0px';
                element.style.marginTop = margin + 'px';
                element.style.width = W + 'px';
                element.style.height = size + 'px';
            }
        }

        return {
            adjustElement: adjustElement
        };
    }
});
