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

/*global define, console, document, tizen, alert, tau, window*/
/*jslint plusplus: true*/

/**
 * Main page module
 */

define({
    name: 'views/main',
    requires: [
        'core/event',
        'models/options'
    ],
    def: function viewsMain(req) {
        'use strict';

        var e = req.core.event,
            o = req.models.options,

            page = null,
            content = null,
            header = null,
            footer = null,
            optionsBtn = null,
            clearBtn = null,
            canvas = null,
            context = null,

            drawPath = {},
            strokeWidth = null,
            strokeColor = null,
            touchedFooterBtnCounter = 0,

            ADDITIONAL_LINE_WIDTH = 0.5,
            HALF_PIXEL = 0.5;

        /**
         * Gets option values.
         */
        function getOptionValues() {
            strokeWidth = o.getStrokeWidth();
            strokeColor = o.getStrokeColor();
        }

        /**
         * Handles pageshow event.
         */
        function onPageShow() {
            getOptionValues();
        }

        /**
         * Handles click event on option button.
         */
        function onOptionsBtnTap() {
            e.fire('show.options');
        }

        /**
         * Handles click event on clear button.
         */
        function onClearBtnTap() {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }

        /**
         * Handles touchstart event on canvas.
         * @param {event} ev
         */
        function onCanvasTouchStart(ev) {
            var touch = ev.changedTouches[0];

            drawPath[touch.identifier] = touch;

            context.fillStyle = strokeColor;
            context.beginPath();
            context.arc(
                drawPath[touch.identifier].pageX - canvas.offsetLeft,
                drawPath[touch.identifier].pageY - canvas.offsetTop -
                    header.offsetHeight,
                strokeWidth / 2,
                0,
                Math.PI * 2,
                true
            );
            context.closePath();
            context.fill();
        }

        /**
         * Handles touchend event on canvas.
         * @param {event} ev
         */
        function onCanvasTouchEnd(ev) {
            var touch = ev.changedTouches[0];

            delete drawPath[touch.identifier];
        }

        /**
         * Handles touchmove event on canvas.
         * @param {event} ev
         */
        function onCanvasTouchMove(ev) {
            var touches = ev.changedTouches,
                touchesLength = touches.length,
                currentDrawPath = null,
                i = 0;

            context.lineWidth = strokeWidth + ADDITIONAL_LINE_WIDTH;
            context.strokeStyle = strokeColor;
            context.lineJoin = 'round';

            for (i = 0; i < touchesLength; i += 1) {
                currentDrawPath = drawPath[touches[i].identifier];
                if (currentDrawPath !== undefined) {
                    context.beginPath();
                    context.moveTo(
                        currentDrawPath.pageX - canvas.offsetLeft + HALF_PIXEL,
                        currentDrawPath.pageY - canvas.offsetTop + HALF_PIXEL -
                            header.offsetHeight
                    );
                    context.lineTo(
                        touches[i].pageX - canvas.offsetLeft + HALF_PIXEL,
                        touches[i].pageY - canvas.offsetTop + HALF_PIXEL -
                            header.offsetHeight
                    );
                    context.closePath();
                    context.stroke();

                    drawPath[touches[i].identifier] = touches[i];
                }
            }
            ev.preventDefault();
        }

        /**
         * Handles touchend event on footer.
         * @param {event} ev
         */
        function onFooterTouchEnd(ev) {
            var touch = ev.changedTouches[0];

            delete drawPath[touch.identifier];
        }

        /**
         * Registers canvas event listeners.
         */
        function addCanvasListeners() {
            canvas.addEventListener('touchstart', onCanvasTouchStart);
            canvas.addEventListener('touchend', onCanvasTouchEnd);
            canvas.addEventListener('touchmove', onCanvasTouchMove);
            footer.addEventListener('touchend', onFooterTouchEnd);
        }

        /**
         * Removes canvas event listeners.
         */
        function removeCanvasListeners() {
            canvas.removeEventListener('touchstart', onCanvasTouchStart);
            canvas.removeEventListener('touchend', onCanvasTouchEnd);
            canvas.removeEventListener('touchmove', onCanvasTouchMove);
            footer.removeEventListener('touchend', onFooterTouchEnd);
        }

        /**
         * Handles touchstart event on footer button.
         */
        function onFooterBtnTouchStart() {
            touchedFooterBtnCounter += 1;
        }

        /**
         * Handles touchend event on footer button.
         */
        function onFooterBtnTouchEnd() {
            if (touchedFooterBtnCounter > 0) {
                touchedFooterBtnCounter -= 1;
            }
        }

        /**
         * Function called when application visibility state changes
         * (document.visibilityState changed to 'visible' or 'hidden').
         */
        function visibilityChange() {
            if (document.visibilityState !== 'visible') {
                removeCanvasListeners();
            } else {
                touchedFooterBtnCounter = 0;
                addCanvasListeners();
            }
        }

        /**
         * Registers view event listeners.
         */
        function bindEvents() {
            page.addEventListener('pageshow', onPageShow);
            optionsBtn.addEventListener('click', onOptionsBtnTap);
            optionsBtn.addEventListener('touchstart', onFooterBtnTouchStart);
            optionsBtn.addEventListener('touchend', onFooterBtnTouchEnd);
            clearBtn.addEventListener('click', onClearBtnTap);
            clearBtn.addEventListener('touchstart', onFooterBtnTouchStart);
            clearBtn.addEventListener('touchend', onFooterBtnTouchEnd);
            addCanvasListeners();
        }

        /**
         * Initiates canvas.
         */
        function initCanvas() {
            canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - header.offsetHeight -
                footer.offsetHeight;
            canvas.setAttribute('id', 'main-canvas');
            content.appendChild(canvas);
            context = canvas.getContext('2d');
        }

        /**
         * Initiates module.
         */
        function init() {
            page = document.getElementById('main');
            content = document.getElementById('main-content');
            header = document.getElementById('main-header');
            footer = document.getElementById('main-footer');
            optionsBtn = document.getElementById('main-options-btn');
            clearBtn = document.getElementById('main-clear-btn');
            initCanvas();
            getOptionValues();
            bindEvents();
        }

        e.listeners({
            'views.init.visibility.change': visibilityChange
        });

        return {
            init: init
        };
    }

});
