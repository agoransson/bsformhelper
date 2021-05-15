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
import { Control } from './index';

export type CheckboxControl = Control & {
    labels: Array<string>;
    inline?: boolean;
}

export const isCheckbox = (arg: Control): arg is CheckboxControl => 
    arg.type.toLowerCase() === 'checkbox' || arg.type.toLowerCase() === 'check';

/**
 * Renders a checkbox group.
 * 
 * @param {CheckboxControl} control 
 * @returns 
 */
export const renderCheckbox = (control: CheckboxControl) => {
    const { name, labels, inline = false } = control;

    return (
        <div key={`${name}-checkbox`}>
            {labels.map((label, index) => (<Form.Check
                key={`${name}-checkbox-${index}`}
                type='checkbox'
                id={label}
                label={label}
                inline={inline} />))}
        </div>
    );
}
