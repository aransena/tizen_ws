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
 * List helper module.
 */
define({
    name: 'helpers/list',
    requires: [
        'helpers/dom'
    ],
    def: function list(domHelper) {
        'use strict';

        /**
         * Snap list style helper instance.
         * @type {SnapListStyle}
         */
        var listHelper = null,

            /**
             * Scrolled element.
             * @type {HTMLElement}
             */
            scrolledElement = null,

            /**
             * Scrolled element.
             * @type {Widget}
             */
            marqueeWidget = null;

        /**
         * Adds animation effects to the list in scrolled element.
         * @param {HTMLElement} page
         */
        function addAnimation(page) {
            var list = null;

            scrolledElement = page.querySelector('.ui-scroller');

            if (scrolledElement) {
                list = scrolledElement.querySelector('.ui-listview');
            }

            if (scrolledElement && list) {
                listHelper = tau.helper.SnapListStyle.create(
                    list,
                    {animate: 'scale'}
                );
                scrolledElement.setAttribute('tizen-circular-scrollbar', '');
            }
        }

        /**
         * Removes animation effects from the list in scrolled element.
         */
        function removeAnimation() {
            if (listHelper) {
                listHelper.destroy();
                listHelper = null;

                if (scrolledElement) {
                    scrolledElement.removeAttribute('tizen-circular-scrollbar');
                }
            }
        }

        /**
         * Handles pagebeforeshow event on active page element.
         */
        function onPageBeforeShow() {
            /*jshint validthis:true*/
            addAnimation(this);
        }

        /**
         * Handles pagebeforehide event on active page element.
         */
        function onPageBeforeHide() {
            removeAnimation();
        }

        /**
         * Handles selected event on list element.
         * @param {Event} ev
         */
        function onListSelected(ev) {
            var element = ev.target.querySelector('.ui-marquee');

            if (element) {
                marqueeWidget = tau.widget.Marquee(element);
            }

            if (marqueeWidget) {
                marqueeWidget.start();
            }
        }

        /**
         * Handles scrollstart event on list element.
         */
        function onListScrollStart() {
            if (marqueeWidget) {
                marqueeWidget.stop();
                marqueeWidget.reset();
            }
        }

        /**
         * Handles scrollend event on list element.
         */
        function onListScrollEnd() {
            marqueeWidget = null;
        }

        /**
         * Handles pagebeforehide event on list page element.
         */
        function onListPageBeforeHide() {
            marqueeWidget = null;
        }

        /**
         * Provides adding and removing animation effects
         * to the list in scrolled element.
         * @param {HTMLElement} page
         */
        function animate(page) {
            if (page.classList.contains('ui-page-active')) {
                addAnimation(page);
            }

            page.addEventListener('pagebeforeshow', onPageBeforeShow);
            page.addEventListener('pagebeforehide', onPageBeforeHide);
        }

        /**
         * Provides marquee functionality for list items.
         * @param {HTMLElement} list
         */
        function marquee(list) {
            list.addEventListener('selected', onListSelected);
            list.addEventListener('scrollstart', onListScrollStart);
            list.addEventListener('scrollend', onListScrollEnd);
            domHelper.closest(list, '.ui-page').addEventListener(
                'pagebeforehide',
                onListPageBeforeHide
            );
        }

        return {
            animate: animate,
            marquee: marquee
        };
    }
});
