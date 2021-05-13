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
exports.renderDivider = exports.isDivider = void 0;
const react_1 = require("react");
const index_1 = require("./index");
const isDivider = (arg) => arg.type.toLowerCase() === '-';
exports.isDivider = isDivider;
/**
 * Renders a form divider.
 *
 * @returns
 */
const renderDivider = () => {
    return (react_1.default.createElement("hr", { key: index_1.randomId() }));
};
exports.renderDivider = renderDivider;
//# sourceMappingURL=Divider.js.map