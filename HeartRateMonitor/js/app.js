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

/*global require, define, console, $*/

/**
 * App module
 * @requires {@link views/init}
 * @namespace HeartRateMonitor/app
 * @memberof HeartRateMonitor
 */

define({
    name: 'app',
    requires: [
        'views/init'
    ],
    def: function appInit() {
        'use strict';

        console.log('app::def');

        /**
         * Initializes the app.
         * @memberof HeartRateMonitor/app
         */
        function init() {
            console.log('app::init');
        }

        return {
            init: init
        };
    }
});
