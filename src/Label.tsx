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
import { Control } from '.';

export type LabelControl = Control & {
    title: String;
}

export const isLabel = (arg: Control): arg is LabelControl => arg.type.toLowerCase() === 'label';

/**
 * Renders a label.
 * 
 * @param {LabelControl} control 
 * @returns <Form.Label />
 */
export const renderLabel = (label: (LabelControl | String)) => (
    // (control.type === 'file' || control.type === 'check') ? <React.Fragment /> : 
    // (label instanceof LabelControl) ? renderControl(label) :
    // obj(label) ? renderControl({type: 'label', ...label}) :
    // typeof label === 'string' ? renderControl({type: 'label', title: label}) :
    <React.Fragment />
)

