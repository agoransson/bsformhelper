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
exports.isSelect = void 0;
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const index_1 = require("./index");
const isSelect = (arg) => arg.type.toLowerCase() === 'select';
exports.isSelect = isSelect;
/**
 * Renders a select input.
 *
 * @param {object} control
 * @returns
 */
const renderSelect = (control) => {
    const id = index_1.randomId();
    const { multiple, options } = control;
    return (react_1.default.createElement(react_bootstrap_1.Form.Control, Object.assign({ key: `${control.name}-${id}` }, control, { as: 'select', multiple: multiple }), options.map((option, index) => react_1.default.createElement("option", { key: `${control.name}-${id}-option-${index}` }, option))));
};
//# sourceMappingURL=SelectControl.js.map