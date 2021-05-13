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

import React from 'react';
import { Form } from 'react-bootstrap';
import { Control, randomId } from '.';

export type TextControl = Control & {
}
export const isText = (arg: Control): arg is TextControl => arg.type.toLowerCase() === 'text';

/**
 * Renders a text input.
 * 
 * @param {TextControl} control 
 * @returns 
 */
export const renderText = (control: TextControl) => (
    <Form.Control type="text" key={`${control.name}-${randomId()}`} {...control} />
)