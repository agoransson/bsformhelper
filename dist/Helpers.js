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
exports.randomId = exports.obj = void 0;
/**
 * Helper method to check if argument is an object.
 *
 * @param {object} object
 * @returns true/false
 */
const obj = (object) => (object instanceof Object);
exports.obj = obj;
/**
 * Helper to generate a random string, used to create unique keys.
 *
 * @returns string
 */
const randomId = () => (Math.random().toString(36).substr(2, 9));
exports.randomId = randomId;
//# sourceMappingURL=Helpers.js.map