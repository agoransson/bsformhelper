"use strict";
/**
 * bsformhelper
 *
 * Copyright (c) Andreas Göransson (https://github.com/agoransson)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const _1 = require(".");
/**
 * Renders a single control.
 *
 * @param {Control} control
 * @returns <Form.Control />
 */
const renderControl = (control) => (_1.isLabel(control) ? _1.renderLabel(control) :
    _1.isText(control) ? _1.renderText(control) :
        _1.isSelect(control) ? _1.renderSelect(control) :
            _1.isTextarea(control) ? _1.renderTextarea(control) :
                _1.isFile(control) ? _1.renderFile(control) :
                    _1.isRange(control) ? _1.renderRange(control) :
                        _1.isCheckbox(control) ? _1.renderCheckbox(control) :
                            _1.isRadio(control) ? _1.renderRadio(control) :
                                _1.isDivider(control) ? _1.renderDivider() :
                                    react_1.default.createElement(react_1.default.Fragment, null));
/**
 * Renders a form group containing an optional label and a control.
 *
 * @param {object} control
 * @returns <Form.Group />
 */
const renderGroup = (control) => {
    if (_1.isDivider(control)) {
        return _1.renderDivider();
    }
    const { name } = control;
    return (react_1.default.createElement(react_bootstrap_1.Form.Group, { as: react_bootstrap_1.Col, key: `${name}-group`, controlId: name }, renderControl(control)));
};
/**
 * Renders a row inside the form.
 *
 * @param {array} controls
 * @returns <Form.Row />
 */
const renderRow = (controls) => (react_1.default.createElement(react_bootstrap_1.Form.Row, { key: controls.map(control => control.name).join('.') }, controls.map((control) => (renderGroup(control)))));
/**
 * Renders a complete form.
 *
 * @param {array} form      The form, should be defined as an array.
 */
const renderForm = (controls) => (controls.map(control => (Array.isArray(control) ? renderRow(control) : renderRow([control]))));
exports.default = renderForm;
//# sourceMappingURL=FormHelper.js.map