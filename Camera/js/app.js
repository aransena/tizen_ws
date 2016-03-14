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

/*global require, define, tizen, console*/

/**
 * App module
 */

define({
    name: 'app',
    requires: [
        'views/initPage'
    ],
    def: function appInit() {
        'use strict';

        /**
         * Initiates module.
         */
        function init() {
            console.log('app::init');
        }

        return {
            init: init
        };
    }
});
