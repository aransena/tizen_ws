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

/*global define, tizen*/

/**
 * Dom helper module
 */

define({
    name: 'helpers/dom',
    requires: [
    ],
    def: function helpersDom() {
        'use strict';

        /**
         * Returns true when child object given as first parameter
         * is the descendant of the parent object given as second parameter,
         * false otherwise.
         * @param {DOMObject} child
         * @param {DOMObject} parent
         * @return {boolean}
         */
        function isDescendant(child, parent) {
            var node = child.parentNode;

            while (node !== null) {
                if (node === parent) {
                    return true;
                }
                node = node.parentNode;
            }
            return false;
        }

        return {
            isDescendant: isDescendant
        };
    }
});
