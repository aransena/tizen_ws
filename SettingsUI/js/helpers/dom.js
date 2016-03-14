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

/*global define, tau*/

/**
 * DOM helper module.
 */
define({
    name: 'helpers/dom',
    requires: [],
    def: function def() {
        'use strict';

        /**
         * Returns closest element (parent) satisfying specified selector.
         * If element is not found, null is returned.
         * @param {HTMLElement} element
         * @param {string} selector
         * @return {HTMLElement}
         * @private
         */
        function closest(element, selector) {
            do {
                if (element.webkitMatchesSelector(selector)) {
                    return element;
                }

                element = element.parentElement;

            } while (element !== null);

            return null;
        }

        return {
            closest: closest
        };
    }
});
