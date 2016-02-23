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

/*global define, console*/
/*jslint plusplus: true*/

/**
 * Options module
 */

define({
    name: 'models/options',
    requires: [],
    def: function modelsOptions() {
        'use strict';

        var DEFAULT_STROKE_WIDTH = 1,
            DEFAULT_STROKE_COLOR = '#fff',

            strokeWidth = DEFAULT_STROKE_WIDTH,
            strokeColor = DEFAULT_STROKE_COLOR;

        /**
         * Returns stroke width.
         */
        function getStrokeWidth() {
            return strokeWidth;
        }

        /**
         * Sets stroke width.
         */
        function setStrokeWidth(value) {
            strokeWidth = parseFloat(value);
        }

        /**
         * Returns stroke color.
         */
        function getStrokeColor() {
            return strokeColor;
        }

        /**
         * Sets stroke color.
         */
        function setStrokeColor(value) {
            strokeColor = value;
        }

        return {
            getStrokeWidth: getStrokeWidth,
            setStrokeWidth: setStrokeWidth,
            getStrokeColor: getStrokeColor,
            setStrokeColor: setStrokeColor
        };
    }

});
