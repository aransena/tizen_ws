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

/*global app: true, model, ui, EquationInvalidFormatError, CalculationError,
  InfinityError, console, systeminfo, tizen*/
/**
 * App module.
 * @requires {@link model}
 * @requires {@link systeminfo}
 * @requires {@link EquationInvalidFormatError}
 * @requires {@link CalculationError}
 * @requires {@link InfinityError}
 * @namespace app
 */
app = {
    /**
     * Separator.
     * @const
     * type {string}
     */
    SEPARATOR: ',',

    /**
     * Initializes application.
     * Following modules are initialized:
     * - Systeminfo
     * - Model
     * - UI
     */
    init: function init() {
        'use strict';
        systeminfo.init();
        model.init();
        ui.init();
        this.refreshEquation();
    },

    /**
     * Refreshes equation field.
     */
    refreshEquation: function refreshEquation() {
        'use strict';
        ui.showEquation(model.equation);
    },

    /**
     * @type {object} Operator keys.
     */
    operatorKeys: {
        'add': '+',
        'sub': '-',
        'mul': '*',
        'div': '/'
    },

    /**
     * Handles press key event.
     * @param {object} key
     */
    processKey: function processKey(key) {
        'use strict';

        var keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        if (ui.isResultVisible()) {
            if (
                Object.keys(this.operatorKeys).indexOf(key) === -1 &&
                    key !== 'del' &&
                    key !== 'eql' &&
                    key !== 'sign'
            ) {
                model.resetEquation();
            }
        }
        ui.clearResult();

        // handling special keys
        if (keys.indexOf(key) !== -1) {
            this.pushDigits(key);
        } else if (Object.keys(this.operatorKeys).indexOf(key) !== -1) {
            model.addOperator(this.operatorKeys[key]);
        } else if (key === 'dec') {
            model.addDecimal();
        } else if (key === 'del') {
            model.deleteLast();
        } else if (key === 'c') {
            model.resetEquation();
        } else if (key === 'sign') {
            model.changeSign();
        } else if (key === 'bracket') {
            model.addBracket();
        }

        if (key === 'eql' && !model.isEmpty()) {
            this.calculate();
        }
        this.refreshEquation();
    },

    /**
     * Handles pressing digit button.
     * @param {object} key
     */
    pushDigits: function pushDigits(key) {
        'use strict';
        if (!model.addDigit(key)) {
            ui.showError('Maximum number of <br/>digits (' + model.MAX_DIGITS +
                    ') exceeded.');
        }
    },

    /**
     * Adds separators to the specified equation.
     * @param {string} equationString
     * @returns {string} Equation with separators.
     */
    addSeparators: function addSeparators(equationString) {
        'use strict';
        /*jslint unparam: true*/
        var negative = false;
        if (model.isNegativeComponent(equationString)) {
            equationString = RegExp.$2;
            negative = true;
        }
        equationString = equationString.replace(
            /^(\-?)([0-9]+)/g,
            function replacer(match, sign, p1) {
                var p1array;
                p1 = p1.split('').reverse().join('');
                p1array = p1.match(new RegExp('.{1,3}', 'g'));
                p1 = p1array.join(app.SEPARATOR);
                p1 = p1.split('').reverse().join('');
                return sign + p1;
            }
        );
        return negative ? '(-' + equationString + ')' : equationString;
    },

    /**
     * Calculates equation and displays result on the screen.
     */
    calculate: function calculate() {
        'use strict';
        var result = '';
        try {
            result = model.calculate();
            result = this.addSeparators(result);
            ui.showResult('=&nbsp;' + result);
        } catch (e) {
            if (e instanceof EquationInvalidFormatError) {
                ui.showResult('= Error', true);
            } else if (e instanceof CalculationError) {
                ui.showResult('Invalid operation', true);
            } else if (e instanceof InfinityError) {
                ui.showResult(
                    (e.positive ? '' : '&minus;') + '&infin;'
                );
            } else {
                ui.showError('Unknown error.');
                console.warn(e);
            }
        }
    },

    /**
     * Handles Low Battery event.
     * In such case application will be closed.
     */
    onLowBattery: function onLowBattery() {
        'use strict';
        try {
            tizen.application.getCurrentApplication().exit();
        } catch (ignore) {}
    }
};
