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
exports.renderRadio = exports.isRadio = void 0;
const react_1 = require("react");
const react_bootstrap_1 = require("react-bootstrap");
const _1 = require(".");
const isRadio = (arg) => arg.type.toLowerCase() === 'radio';
exports.isRadio = isRadio;
/**
 * Renders a radio group.
 *
 * @param {RadioControl} control
 * @returns
 */
const renderRadio = (control) => {
    const { labels, name } = control;
    return (react_1.default.createElement("div", { key: `${name}-${_1.randomId()}-checkbox` }, labels.map((label, index) => (react_1.default.createElement(react_bootstrap_1.Form.Check, { key: `${name}-${_1.randomId()}-checkbox-${index}`, type: 'checkbox', id: label, label: label })))));
};
exports.renderRadio = renderRadio;
//# sourceMappingURL=Radio.js.map