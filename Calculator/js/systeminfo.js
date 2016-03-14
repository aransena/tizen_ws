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

/*global define, tizen, console*/

/**
 * System info module.
 * @namespace systeminfo
 */
var systeminfo = {

    /**
     * tizen.systeminfo instance.
     * @type {object}
     */
    systeminfo: null,

    /**
     * Adds listener for battery change to low.
     * Threshold for low battery state is set to 4%.
     */
    listenBatteryLowState: function listenBatteryLowState() {
        'use strict';
        this.systeminfo.addPropertyValueChangeListener(
            'BATTERY',
            function change(battery) {
                if (!battery.isCharging) {
                    try {
                        tizen.application.getCurrentApplication().exit();
                    } catch (ignore) {}
                }
            },
            {
                lowThreshold: 0.04
            }
        );
    },

    /**
     * Checks low battery state.
     *
     * If battery level is less than 4% and if charger is not
     * connected application will be closed.
     */
    checkBatteryLowState: function checkBatteryLowState() {
        'use strict';
        this.systeminfo.getPropertyValue(
            'BATTERY',
            function onBatteryRead(battery) {
                if (battery.level < 0.04 && !battery.isCharging) {
                    try {
                        tizen.application.getCurrentApplication().exit();
                    } catch (ignore) {}
                }
            },
            null
        );
    },

    /**
     * Initializes the systeminfo module.
     */
    init: function init() {
        'use strict';
        if (typeof tizen === 'object' &&
            typeof tizen.systeminfo === 'object') {
            this.systeminfo = tizen.systeminfo;
            this.checkBatteryLowState();
            this.listenBatteryLowState();
        } else {
            console.warn(
                'tizen.systeminfo not available'
            );
        }
    }

};
