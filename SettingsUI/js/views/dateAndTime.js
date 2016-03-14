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

/*global define, document, tau */

/**
 * Date and time view module.
 */
define({
    name: 'views/dateAndTime',
    requires: [
        'core/event',
        'helpers/list',
        'helpers/page',
        'helpers/date',
        'views/setDate',
        'views/setTime'
    ],
    def: function dateAndTimeDefine(req) {
        'use strict';

        /**
         * Core events module.
         * @type {Module}
         */
        var e = req.core.event,

            /**
             * List helper module instance.
             * @type {Module}
             */
            listHelper = req.helpers.list,

            /**
             * Page helper module instance.
             * @type {Module}
             */
            pageHelper = req.helpers.page,

            /**
             * Date helper module.
             * @type {Module}
             */
            dateHelper = req.helpers.date,

            /**
             * "Set date" view module.
             * @type {Module}
             */
            setDateView = req.views.setDate,

            /**
             * "Set time" view module.
             * @type {Module}
             */
            setTimeView = req.views.setTime,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null,

            /**
             * Reference to "Automatic" time toggle switch.
             * @type {HTMLElement}
             */
            automaticTimeToggleSwitchElement = null,

            /**
             * CSS class name for disabled content.
             * @type {string}
             */
            DISABLED_CLASS = 'disabled';

        /**
         * Updates date value.
         */
        function updateDate() {
            page.querySelector('#system-date-value').innerText =
                dateHelper.format(setDateView.getDate(), 'dd/mm/yyyy');
        }

        /**
         * Updates time value.
         */
        function updateTime() {
            // update date value
            page.querySelector('#system-time-value').innerText =
                dateHelper.format(setTimeView.getTime(), 'HH:MM');
        }

        /**
         * Updates state of "Automatic" dependent options.
         */
        function updateAutomaticDependantOptions() {
            var automaticChecked = automaticTimeToggleSwitchElement.checked,
                options = page.querySelectorAll('[data-automatic-off]'),
                i = 0,
                length = options.length;

            for (i = 0; i < length; i += 1) {
                if (automaticChecked) {
                    options[i].classList.add(DISABLED_CLASS);
                } else {
                    options[i].classList.remove(DISABLED_CLASS);
                }
            }
        }

        /**
         * Handles pagebeforeshow event page element.
         */
        function onPageBeforeShow() {
            updateDate();
            updateTime();
            updateAutomaticDependantOptions();
            pageHelper.resetScroll(page);
        }

        /**
         * Handles system date change event.
         */
        function onSystemDateChanged() {
            updateDate();
        }

        /**
         * Handles system time change event.
         */
        function onSystemTimeChanged() {
            updateTime();
        }

        /**
         * Handles "change" event on "Automatic" time toggle switch.
         */
        function onAutomaticTimeToggleSwitchChanged() {
            updateAutomaticDependantOptions();
        }

        /**
         * Registers event listeners.
         */
        function bindEvents() {
            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            automaticTimeToggleSwitchElement.addEventListener('change',
                onAutomaticTimeToggleSwitchChanged);

            e.listeners({
                'views.setDate.system.date.changed': onSystemDateChanged,
                'views.setTime.system.time.changed': onSystemTimeChanged
            });
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('date-and-time');
            automaticTimeToggleSwitchElement = page
                .querySelector('#date-time-automatic');
            bindEvents();

            listHelper.animate(page);
        }

        return {
            init: init
        };
    }
});
