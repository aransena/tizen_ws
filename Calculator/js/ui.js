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

/*global document, ui: true, Image, app, tizen, window*/

/**
 * UI module.
 * @requires {@link app}
 * @namespace ui
 */
ui = {
    /**
     * Delay after which longtap event is executed.
     * @const
     * @type {number}
     */
    LONGTAP_DELAY: 400,

    /**
     * Interval of processing longtap event.
     * @const
     * @type {number}
     */
    LONGTAP_REPEAT_INTERVAL: 20,

    /**
     * Maximum count of digits in the equation.
     * @const
     * @type {number}
     */
    MAX_DIGITS: 9,

    /**
     * Minimum number of digits in the equation after which font is decreased.
     * @const
     * @type {number}
     */
    SMALL_FONT_THRESHOLD: 7,

    /**
     * Container for timers of longtap events.
     * @const
     * @type {object}
     */
    longTapRepeatTimers: {},

    /**
     * Initializes UI module.
     *
     * Following actions are performed:
     * - assignment of the most significant UI elements to the variables
     * - events binding
     * - preloading images
     * - clearing error state
     * - clearing result state
     * - disabling multitouch
     *
     */
    init: function init() {
        'use strict';
        this.resultElement = document.getElementById('result');
        this.resultValueElement = document.getElementById('resultvalue');
        this.equationElement = document.getElementById('equation');
        this.displayElement = document.getElementById('display');
        this.preloadImages();
        this.bindEvents();
        this.error = false;
        this.result = false;
        // disable multitouch
        document.body.addEventListener('touchstart', this.filterTap, true);
        document.body.addEventListener('touchend', this.filterTap, true);
    },

    /**
     * Array of button images.
     * @type {string[]}
     */
    imagesToPreload: [
        'img/key_0_press.png',
        'img/key_1_press.png',
        'img/key_2_press.png',
        'img/key_3_press.png',
        'img/key_4_press.png',
        'img/key_5_press.png',
        'img/key_6_press.png',
        'img/key_7_press.png',
        'img/key_8_press.png',
        'img/key_9_press.png',
        'img/key_c_press.png',
        'img/key_del_press.png',
        'img/key_div_press.png',
        'img/key_mul_press.png',
        'img/key_sub_press.png',
        'img/key_add_press.png',
        'img/key_dec_press.png',
        'img/key_eql_press.png'
    ],

    /**
     * Images cache.
     * @type {Image[]}
     */
    imagesCache: [],

    /**
     * Loads images and pushes them to cache.
     */
    preloadImages: function preloadImages() {
        'use strict';
        var i, image;
        for (i = this.imagesToPreload.length - 1; i >= 0; i -= 1) {
            image = new Image();
            image.src = this.imagesToPreload[i];
            this.imagesCache.push(image);
        }
    },

    /**
     * Handles touch events.
     * Disables multitouch.
     * @param {object} ev
     */
    filterTap: function filterTap(ev) {
        'use strict';
        // disable multitouch
        if (ev.touches.length > 1) {
            ev.stopPropagation();
            ev.preventDefault();
        }
    },

    /**
     * Clears registered timers.
     * @param {string} key
     */
    clearLongTapRepeatTimers: function clearLongTapRepeatTimers(key) {
        'use strict';
        if (this.longTapRepeatTimers['start' + key]) {
            window.clearTimeout(this.longTapRepeatTimers['start' + key]);
            this.longTapRepeatTimers['start' + key] = null;
        }

        if (this.longTapRepeatTimers['repeat' + key]) {
            window.clearInterval(this.longTapRepeatTimers['repeat' + key]);
            this.longTapRepeatTimers['repeat' + key] = null;
        }
    },

    /**
     * Registers view event listeners.
     */
    bindEvents: function bindEvents() {
        'use strict';
        var numpad = document.getElementById('numpad'),
            self = this;

        numpad.addEventListener('touchstart', function onTouchStart(e) {
            var key = '',
                target = e.target,
                classList = target.classList;

            if (!classList.contains('key') && !classList.contains('longkey')) {
                return;
            }
            classList.add('press');
            key = target.id.replace(/key_/, '');
            if (classList.contains('long-tap-repeat')) {
                self.longTapRepeatTimers['start' + key] = window.setTimeout(
                    function longtapStart() {
                        app.processKey(key);
                        self.longTapRepeatTimers['repeat' + key] =
                            window.setInterval(
                                function longtapRepeat() {
                                    app.processKey(key);
                                },
                                self.LONGTAP_REPEAT_INTERVAL
                            );
                    },
                    self.LONGTAP_DELAY
                );
            } else {
                app.processKey(key);
            }

        });
        numpad.addEventListener('touchend', function onTouchEnd(e) {
            var key = '',
                target = e.target,
                classList = target.classList;
            if (!classList.contains('key') &&
                !classList.contains('longkey')) {
                return;
            }
            classList.remove('press');
            key = target.id.replace(/key_/, '');
            if (classList.contains('long-tap-repeat') &&
                    !self.longTapRepeatTimers['repeat' + key]) {
                if (e.touches.length === 0) {
                    app.processKey(key);
                }
            }
            self.clearLongTapRepeatTimers(key);
        });
        numpad.addEventListener('touchcancel', function onTouchCancel(e) {
            var key = '',
                target = e.target,
                classList = target.classList;
            if (!classList.contains('key') &&
                !classList.contains('longkey')) {
                return;
            }
            classList.remove('press');
            key = target.id.replace(/key_/, '');
            self.clearLongTapRepeatTimers(key);
        });
        document.addEventListener('tizenhwkey', function onTizenHwKey(e) {
            if (e.keyName === 'back') {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {}
            }
        });
    },

    /**
     * Object that maps calculator signs to the HTML version.
     * @type {object}
     */
    operatorDisplays: {
        '+': '+',
        '-': '&minus;',
        '*': '&times;',
        '/': '&divide;'
    },

    /**
     * Displays given equation.
     * @param {string} equation
     */
    showEquation: function showEquation(equation) {
        'use strict';
        var e, element, elementText, span, equationElement, length;

        equationElement = document.getElementById('equation');

        equationElement.innerHTML = '';

        length = equation.length;
        for (e = 0; e < length; e += 1) {
            element = equation[e];
            span = document.createElement('span');
            elementText = element;
            if (Object.keys(this.operatorDisplays).indexOf(element) !== -1) {
                span.className = 'operator';
                elementText = this.operatorDisplays[element];
            } else {
                elementText = app.addSeparators(elementText);
            }
            elementText = elementText.replace(/-/g, '&minus;');
            span.innerHTML = elementText;
            equationElement.appendChild(span);
        }

        if (equation[0] && equation[0].length >= this.SMALL_FONT_THRESHOLD) {
            equationElement.classList.add('medium');
        } else {
            equationElement.classList.remove('medium');
        }
    },

    /**
     * Shows string in result element.
     * @param {string} result
     * @param {boolean} error Error flag
     * @private
     */
    show: function show(result, error) {
        'use strict';

        if (result === '') {
            return this.clear();
        }

        this.equationElement.classList.add('top');
        this.displayElement.classList.remove('empty-result');

        if (error === true) {
            this.resultElement.classList.add('error');
            if (result.length > this.MAX_DIGITS) {
                this.resultElement.classList.add('small');
            } else {
                this.resultElement.classList.remove('small');
            }
        } else {
            this.resultElement.classList.remove('error');
            this.resultElement.classList.remove('small');
        }

        this.resultValueElement.innerHTML = result.replace(/-/g, '&minus;');
    },

    /**
     * Clears result element.
     * @private
     */
    clear: function clear() {
        'use strict';
        this.equationElement.classList.remove('top');
        this.resultValueElement.innerHTML = '';
        this.displayElement.classList.add('empty-result');
    },

    /**
     * Shows error in result element.
     * @param {string} error
     */
    showError: function showError(error) {
        'use strict';
        this.show(error, true);
        this.error = true;
    },

    /**
     * Shows result in result element.
     * @param {string} result
     * @param {boolean} error Error flag.
     */
    showResult: function showResult(result, error) {
        'use strict';
        error = error || false;
        if (error) {
            this.error = true;
        }
        this.show(result, error);
        this.result = true;
    },

    /**
     * Clears result element and flags.
     */
    clearResult: function clearResult() {
        'use strict';
        this.clear();
        this.result = false;
        this.error = false;
    },

    /**
     * Returns true for result, false for empty result.
     * @return {boolean}
     */
    isResultVisible: function isResultVisible() {
        'use strict';
        return this.result;
    }

};
