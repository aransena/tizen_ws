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

/*global model: true, console*/
/**
 * Handler of invalid format error.
 * @param {string} [message]
 * @class EquationInvalidFormatError
 * @augments Error
 * @constructor
 */
function EquationInvalidFormatError(message) {
    'use strict';
    this.name = 'EquationInvalidFormatError';
    this.message = message || 'Equation invalid format';
}
EquationInvalidFormatError.prototype = new Error();
EquationInvalidFormatError.prototype.constructor = EquationInvalidFormatError;

/**
 * Handler of division by zero error.
 * @param {string} [message]
 * @class DivisionByZeroError
 * @augments Error
 * @constructor
 */
function DivisionByZeroError(message) {
    'use strict';
    this.name = 'DivisionByZeroError';
    this.message = message || 'Division by zero error';
}
DivisionByZeroError.prototype = new Error();
DivisionByZeroError.prototype.constructor = DivisionByZeroError;

/**
 * Handler of calculation error.
 * @param {string} [message]
 * @class CalculationError
 * @augments Error
 * @constructor
 */
function CalculationError(message) {
    'use strict';
    this.name = 'CalculationError';
    this.message = message || 'Calculation error';
}
CalculationError.prototype = new Error();
CalculationError.prototype.constructor = CalculationError;

/**
 * Handler of infinity error.
 * @param {string} [positive]
 * @param {string} [message]
 * @class InfinityError
 * @augments Error
 * @constructor
 * @requires {@link EquationInvalidFormatError}
 * @requires {@link DivisionByZeroError}
 * @requires {@link CalculationError}
 * @requires {@link InfinityError}
 */
function InfinityError(positive, message) {
    'use strict';
    this.name = 'InfinityError';
    this.positive = positive;
    this.message = message || 'Result equals +/- Infinity';
}
InfinityError.prototype = new Error();
InfinityError.prototype.constructor = InfinityError;

/**
 * Model module.
 * @namespace model
 */
model = {

    /**
     * Operators.
     * @const
     * @type {string[]}
     */
    OPERATORS: ['+', '-', '*', '/'],

    /**
     * Decimal separator.
     * @const
     * @type {string}
     */
    DECIMAL: '.',

    /**
     * Minus sign.
     * @const
     * @type {string}
     */
    MINUS: '-',

    /**
     * Maximum count of digits in the equation.
     * @const
     * @type {number}
     */
    MAX_DIGITS: 9,


    /**
     * Exponential regular expression.
     * @const
     * @type {RegExp}
     */
    EXPONENTIAL_REGEXP: /E[\-\+]?$/i,

    /**
     * Open bracket sign
     * @const
     * @type {string}
     */
    BRACKET_OPEN: '(',

    /**
     * Close bracket sign
     * @const
     * @type {string}
     */
    BRACKET_CLOSE: ')',

    /**
     * Equation elements.
     * @type {string[]}
     */
    equation: [],

    /**
     * Indicates whether the equation is calculated or not..
     * @type {boolean}
     */
    calculated: false,

    /**
     * Last calculated result.
     * @type {number|string}
     */
    lastCalculationResult: '',

    /**
     * Initializes the model.
     */
    init: function init() {
        'use strict';
        this.resetEquation();
    },

    /**
     * Resets equation.
     */
    resetEquation: function resetEquation() {
        'use strict';
        this.equation = [];
        this.calculated = false;
    },

    /**
     * Returns true if equation is empty, false otherwise.
     * @return {boolean}
     */
    isEmpty: function isEmpty() {
        'use strict';
        return this.equation.length === 0;
    },

    /**
     * Returns last component of equation.
     * If not exist, null is returned.
     * @param {boolean} correct
     * @return {string|null}
     */
    getLastComponent: function getLastComponent(correct) {
        'use strict';
        var last = this.equation[this.equation.length - 1] || null;
        if (correct && last && last.slice(-1) === this.DECIMAL) {
            last = last.slice(0, -1);
            last.replace('.)', ')');
            this.equation[this.equation.length - 1] = last;
        }
        return last;
    },

    /**
     * Replaces last equation component with specified value.
     * @param {string} value
     */
    replaceLastComponent: function replaceLastComponent(value) {
        'use strict';
        var length = this.equation.length;

        if (length > 0) {
            this.equation[length - 1] = value;
            this.calculated = false;
        }
    },

    /**
     * Adds new component to equation.
     * @param {string} value
     */
    addComponent: function addComponent(value) {
        'use strict';
        this.equation.push(value);
        this.calculated = false;
    },

    /**
     * Returns true if specified value is an operator, false otherwise.
     * @param {string} value
     * @return {boolean}
     */
    isOperator: function isOperator(value) {
        'use strict';
        return this.OPERATORS.indexOf(value) !== -1;
    },

    /**
     * Adds digit to equation.
     * @param {string} digit
     * @return {boolean} true for success | false for fail
     */
    addDigit: function addDigit(digit) {
        /*jshint maxcomplexity:11 */
        'use strict';
        var last = null;

        if (this.calculated) {
            this.resetEquation();
        }

        last = this.getLastComponent();

        // If the previous one is not a number
        // only start a new component,
        // unless there is only a minus before.
        if (
                (!last || this.isOperator(last) || this.isBracket(last)) &&
                (last !== '-' || this.equation.length > 1)
            ) {
            this.addComponent(digit);
            return true;
        }
        this.replaceLastComponent(this.checkNegativeFormat(last));

        if (this.isNegativeComponent(last) || last === '-') {
            last =
                '(-' +
                (RegExp.$2 === '0' ? '' : RegExp.$2) +
                digit +
                ')';
        } else if (last === '0') {
            last = digit;
        } else {
            last = last + digit;
        }
        if (last.replace(new RegExp('[^\\d]', 'g'), '')
                .length <= this.MAX_DIGITS) {
            this.replaceLastComponent(last);
            return true;
        }
        return false;
    },

    /**
     * Adds operator to equation.
     * @param {string} operator
     */
    addOperator: function addOperator(operator) {
        'use strict';
        var last = null;

        if (this.calculated) {
            this.resetEquation();
            this.addComponent(this.lastCalculationResult);
        }

        last = this.getLastComponent(true);

        // Operators other than '-' cannot be added to empty equations
        if (!last && operator !== '-') {
            return;
        }
        // Cannot replace minus if on first position
        if (last === '-' && this.equation.length === 1) {
            return;
        }

        this.replaceLastComponent(this.checkNegativeFormat(last));

        if (this.isOperator(last)) {
            // replace last operator with a new one
            this.replaceLastComponent(operator);
        } else {
            // check for 'E' being the last character of the equation
            if (last && last.match(/E$/)) {
                // add '-' to the number, ignore other operators
                if (operator === '-') {
                    this.replaceLastComponent(last + '-');
                }
            } else {
                // add operator
                this.addComponent(operator);
            }
        }
    },

    /**
     * Adds decimal point to equation.
     */
    addDecimal: function addDecimal() {
        'use strict';
        var last = this.getLastComponent();

        if (!last || this.isOperator(last)) {
            this.addComponent('0' + this.DECIMAL);
        } else {
            this.replaceLastComponent(this.checkNegativeFormat(last));
            if (last.indexOf(this.DECIMAL) === -1) {
                if (this.isNegativeComponent(last)) {
                    last = '(-' + RegExp.$2 + this.DECIMAL + ')';
                } else {
                    last += this.DECIMAL;
                }
                this.replaceLastComponent(last);
            }
        }
    },

    /**
     * Removes last character from the given string.
     * @param {string} str
     */
    removeLastChar: function removeLastChar(str) {
        'use strict';
        return str.substring(0, str.length - 1)
            .replace(this.EXPONENTIAL_REGEXP, '');
    },

    /**
     * Deletes last element from equation (digit or operator).
     */
    deleteLast: function deleteLast() {
        'use strict';
        var last = null, lastPositive;

        if (this.calculated) {
            this.resetEquation();
            this.addComponent(this.lastCalculationResult);
            return;
        }

        last = this.getLastComponent();

        if (!last) {
            return;
        }

        this.replaceLastComponent(this.checkNegativeFormat(last));

        if (this.isNegativeComponent(last)) {
            lastPositive = RegExp.$2;
            if (lastPositive.length === 1) {
                this.equation.pop();
            } else {
                this.replaceLastComponent(
                   '(-' + this.removeLastChar(lastPositive) + ')'
                );
            }
        } else if (last.length === 1 || last.match(/^\-[0-9]$/)) {
            this.equation.pop();
        } else {
            this.replaceLastComponent(this.removeLastChar(last));
        }
    },

    /**
     * Returns true if equation can be calculated, false otherwise
     * @return {boolean}
     */
    isValidEquation: function isValidEquation() {
        'use strict';
        var last = this.getLastComponent(true);

        return (!this.isOperator(last) && !last.match(/E-?$/));
    },

    /**
     * Replaces left operand with specified value.
     * @param {string} value
     */
    replaceLeftOperand: function replaceLeftOperand(value) {
        'use strict';
        var length = this.equation.length,
            leftOperandSize = 0;

        if (length === 0) {
            return;
        }
        if (length === 1) {
            leftOperandSize = 0;
        } else if (length === 2) {
            leftOperandSize = 1;
        } else {
            leftOperandSize = length - 3;
        }

        this.equation.splice(0, leftOperandSize);
        this.equation[0] = value;
        this.calculated = false;
    },

    /**
     * Formats value.
     * @param {number} value
     * @return {string}
     */
    formatValue: function formatValue(value) {
        'use strict';
        var formatted = '',
            textValue = '',
            dotIndex = 0;

        // Round the mantissa to the nearest integer if it won't fit
        textValue = value.toString();
        dotIndex = textValue.indexOf('.');
        if (dotIndex >= this.MAX_DIGITS) {
            // If two first digits of the mantissa are higher than 95,
            // then round the result i.e. 0.95 and higher will be rounded to 1
            // This is the behavior of the Calculator app in Samsung phones
            if (parseInt(textValue.substr(
                        dotIndex + 1, Math.min(textValue.length, 2)
                    ), 10) >= 95) {
                value += 1;
            }
        }
        // Set precision to match 10 digits limit
        formatted = value.toFixed(this.MAX_DIGITS).toString();
        formatted = formatted.substr(
                0, this.MAX_DIGITS + formatted.replace(/\d/g, '').length
            ).replace(/(\.(0*[1-9])*)0+$/, '$1').replace(/\.$/, '');

        // If the number:
        // - is too big (exceeds digits limit), or
        // - is too small (rounds to zero), or
        // - has scientific notation without decimals (1E23 vs 1.00000E23)
        // then use properly formatted scientific notation
        if (
            (formatted === '0' && value !== 0) ||
            value.toString().match(/[eE]/) ||
            Math.abs(value) >= Math.pow(10, 10)
        ) {
            formatted =
                value.toExponential(5).toString();
        }
        // Uppercase 'E', remove optional '+' from exponent
        formatted = formatted.toUpperCase().replace('E+', 'E');

        return formatted;
    },

    /**
     * Checks if component represents negative digit.
     * @param {string} component
     * @return {boolean}
     */
    isNegativeComponent: function isNegativeComponent(component) {
        'use strict';
        return (new RegExp('(\\()\\-(.*?)(\\))')).test(component);
    },

    /**
     * Checks if component is negative and fixes its format.
     * @param {string} component
     * @return {string}
     */
    checkNegativeFormat: function checkNegativeFormat(component) {
        'use strict';
        if (component && component.match(/^\-d+/)) {
            component = '(' + component + ')';
        }
        return component;
    },

    /**
     * Changes sign of last component (if applicable).
     * Returns true if sign was changed, false otherwise.
     * @return {boolean}
     */
    changeSign: function changeSign() {
        'use strict';
        var last;

        if (this.calculated) {
            this.resetEquation();
            this.addComponent(this.lastCalculationResult);
        }

        last = this.getLastComponent();
        // if there is at least one component
        // and last component isn't operator
        // and last component isn't zero
        if (last && !this.isOperator(last) && last !== '0') {
            if ((/^\-/).test(last)) {
                last = '(' + last + ')';
            }
            if (this.isNegativeComponent(last)) {
                last = RegExp.$2; // assign last matched value
            } else {
                last = '(-' + last + ')';
            }
            this.replaceLastComponent(last);
            return true;
        }

        return false;
    },

    /**
     * Calculates equation value.
     * @return {string}
     */
    calculate: function calculate() {
        'use strict';
        /*jslint evil:true*/
        /*jslint unparam: true*/
        var evaluation = '',
            result,
            /**
             * Checks if the matched number is zero.
             * @param {string} wholeMatch Whole match
             * including the division operator.
             * @param {string} numberMatch Whole number
             * including sign and parenthesis.
             * @param {string} number The matched number.
             * @return {string}
             */
            checkDivisionByZero = function checkDivisionByZero(
                    wholeMatch, numberMatch, number) {
                if (parseFloat(number) === 0) {
                    throw new DivisionByZeroError();
                }
                return '/ ' + number;
            };

        if (this.calculated) {
            this.replaceLeftOperand(this.lastCalculationResult);
        }

        if (!this.isValidEquation()) {
            throw new EquationInvalidFormatError();
        }

        this.calculated = false;

        // Evaluate the equation.
        try {
            evaluation = this.equation.join(' ');
            evaluation = evaluation.replace(
                /\/ *(\(?\-?([0-9\.]+)\)?)/g, checkDivisionByZero
            );

            result = eval('(' + evaluation + ')');
            if (Math.abs(result) < 1.0E-300) {
                result = 0;
            }
        } catch (e) {
            console.error(e);
            throw new CalculationError();
        }

        if (isNaN(result)) {
            throw new CalculationError();
        }
        if (result === Infinity || result === -Infinity) {
            throw new InfinityError(result === Infinity);
        }

        this.calculated = true;
        // Format the result value.
        result = this.formatValue(result);
        // Save the calculated result.
        this.lastCalculationResult = result;

        return result;
    },

    /**
     * Adds bracket sign to equation
     */
    addBracket: function addBracket() {
        'use strict';
        var last = this.getLastComponent(),
            countOpened = this.countComponent(this.BRACKET_OPEN),
            countClosed = this.countComponent(this.BRACKET_CLOSE),
            i = 0,
            sign, l;

        if (this.isEmpty(last)) {
            sign = this.BRACKET_OPEN;
        } else if (this.isBracket(last)) {

            if (last === this.BRACKET_CLOSE && countOpened > countClosed) {
                sign = this.BRACKET_CLOSE;
            } else {
                // Two or more brackets next to each other must be opened
                sign = this.BRACKET_OPEN;
            }
        }
        else if (this.isNumeric(last) && countOpened === countClosed) {
            // If all brackets are closed or are not present at all
            // and if bracket is clicked just after digit by default multiply
            // operator is added.
            sign = '*' + this.BRACKET_OPEN;
        }
        // if last component is operator open bracket is added
        else if (this.isOperator(last)) {
            sign = this.BRACKET_OPEN;
        }
        // close bracket
        else if (last !== this.BRACKET_CLOSE && last !== this.BRACKET_OPEN &&
                (countOpened > countClosed)) {
            sign = this.BRACKET_CLOSE;
        }
        else {
            // default
            sign = this.BRACKET_OPEN;
        }

        l = sign.length;
        for (i = 0; i < l; i += 1) {
            this.addComponent(sign[i]);
        }
    },

    /**
     * Finds specified component in the equation.
     * @param {string} val Search for value in the equation
     * @return {string[]}
     */
    findComponent: function findComponent(val) {
        'use strict';
        return this.equation.filter(function findComp(eqComp) {
            return eqComp === val;
        });
    },

    /**
     * Search for specified component in equation and
     * return the number of occurrence.
     * @param {string} val Searched value.
     * @return {number}
     */
    countComponent: function countComponent(val) {
        'use strict';
        var found = this.findComponent(val);
        return found ? found.length : 0;
    },

    /**
     * Checks if given value is one of bracket signs.
     * @param {string} val
     * @return {boolean}
     */
    isBracket: function isBracket(val) {
        'use strict';
        return (val === this.BRACKET_CLOSE || val === this.BRACKET_OPEN);
    },

    /**
     * Checks if given string is numeric value.
     * @param {string} str
     * @returns {boolean}
     */
    isNumeric: function isNumeric(str) {
        'use strict';
        return (/^\d+$/).test(str);
    }

};
