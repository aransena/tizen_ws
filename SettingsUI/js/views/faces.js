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

/*global define, document, tau, setTimeout*/

/**
 * Watch faces view module.
 */
define({
    name: 'views/faces',
    requires: [
        'core/application',
        'helpers/dom'
    ],
    def: function faces(req) {
        'use strict';

        /**
         * Application core module.
         * @type {Module}
         */
        var app = req.core.application,

            /**
             * Dom helper module.
             * @type {Module}
             */
            domHelper = req.helpers.dom,

            /**
             * Page element.
             * @type {HTMLElement}
             */
            page = null,

            /**
             * Page indicator instance.
             * @type {PageIndicator}
             */
            pageIndicator = null,

            /**
             * Section changer instance.
             * @type {SectionChanger}
             */
            sectionChanger = null,

            /**
             * Page indicator element.
             * @type {HTMLElement}
             */
            elPageIndicator = null,

            /**
             * Section changer element.
             * @type {HTMLElement}
             */
            hSectionChanger = null,

            /**
             * Section name element.
             * @type {HTMLElement}
             */
            hSectionName = null,

            /**
             * Collections of the element.
             * @type {HTMLElement}
             */
            sections = null,

            /**
             * Remove face popup element.
             * @type {HTMLElement}
             */
            removeFacePopup = null,

            /**
             * Face change processing element.
             * @type {HTMLElement}
             */
            faceChangeProcessing = null;

        /**
         * Sets section name.
         * @param {string} name
         */
        function setSectionName(name) {
            hSectionName.innerText = name;
        }

        /**
         * Sets footer visibility.
         * @param {boolean} isVisible
         * @param {HTMLElement} footer
         */
        function setFooterVisibility(isVisible, footer) {
            if (isVisible === 'true') {
                footer.classList.remove('hidden');
            } else {
                footer.classList.add('hidden');
            }
        }

        /**
         * Shows remove face popup.
         * @param {string} faceId
         */
        function showRemoveFacePopup(faceId) {
            removeFacePopup.querySelector('.remove-face-thumbnail')
                .style.backgroundImage = 'url(images/face_' + faceId + '.png)';
            tau.openPopup(removeFacePopup);
        }

        /**
         * Hides face change processing.
         */
        function hideFaceChangeProcessing() {
            faceChangeProcessing.classList.add('invisible');
            app.exit();
        }

        /**
         * Shows face change processing.
         */
        function showFaceChangeProcessing() {
            faceChangeProcessing.classList.remove('invisible');
            setTimeout(hideFaceChangeProcessing, 2000);
        }

        /**
         * Handles sectionchange event on section changer element.
         * @param {HTMLElement} page
         * @param {event} e
         */
        function onSectionChange(page, e) {
            var sectionActive = page.querySelector('.ui-section-active');

            pageIndicator.setActive(e.detail.active);
            setSectionName(sectionActive.getAttribute('data-name'));
            setFooterVisibility(
                sectionActive.getAttribute('data-stylize'),
                page.querySelector('.ui-footer')
            );
        }

        /**
         * Handles click event on section changer element.
         * @param {event} e
         */
        function onHSectionChangerClick(e) {
            var element = e.target,
                parentSection = domHelper.closest(element, 'section');

            if (element.classList.contains('ui-section-remove')) {
                showRemoveFacePopup(element.getAttribute('data-id'));
            }

            if (element.classList.contains('ui-section-thumbnail') &&
                   !parentSection.classList.contains('ui-section-current')) {
                showFaceChangeProcessing();
            }
        }

        /**
         * Initializes circle page indicator.
         * @param {HTMLElement} page
         */
        function initializeCirclePageIndicator(page) {
            var sectionActive = page.querySelector('.ui-section-active');

            elPageIndicator = page.querySelector('#page-indicator');
            hSectionChanger = page.querySelector('#h-section-changer');
            hSectionName = page.querySelector('#h-section-name');
            sections = hSectionChanger.querySelectorAll('section');

            pageIndicator = tau.widget.PageIndicator(elPageIndicator, {
                numberOfPages: sections.length
            });
            pageIndicator.setActive(0);

            sectionChanger = new tau.widget.SectionChanger(hSectionChanger, {
                circular: true,
                orientation: 'horizontal',
                fillContent: false,
                useBouncingEffect: true
            });

            setSectionName(sectionActive.getAttribute('data-name'));

            setFooterVisibility(
                sectionActive.getAttribute('data-stylize'),
                page.querySelector('.ui-footer')
            );

            hSectionChanger.addEventListener(
                'sectionchange',
                onSectionChange.bind(null, page),
                false
            );

            hSectionChanger.addEventListener('click', onHSectionChangerClick);
        }

        /**
         * Destroys circle page indicator.
         */
        function destroyCirclePageIndicator() {
            if (sectionChanger) {
                sectionChanger.destroy();
            }
            if (pageIndicator) {
                pageIndicator.destroy();
            }
        }

        /**
         * Handles pagebeforeshow event on active page element.
         * @param {HTMLElement} page
         */
        function onPageBeforeShow(page) {
            initializeCirclePageIndicator(page);
        }

        /**
         * Handles pagebeforehide event on active page element.
         */
        function onPageBeforeHide() {
            destroyCirclePageIndicator();
        }

        /**
         * Provides adding and removing animation effects
         * to the list in scrolled element.
         */
        function createCirclePageIndicator() {
            if (page.classList.contains('ui-page-active')) {
                initializeCirclePageIndicator(page);
            }

            page.addEventListener(
                'pagebeforeshow',
                onPageBeforeShow.bind(null, page)
            );
            page.addEventListener('pagebeforehide', onPageBeforeHide);
        }

        /**
         * Initializes module.
         */
        function init() {
            page = document.getElementById('faces');
            removeFacePopup = document.getElementById('remove-face-popup');
            faceChangeProcessing =
                document.getElementById('face-change-processing');
            createCirclePageIndicator();
        }

        return {
            init: init
        };
    }
});
