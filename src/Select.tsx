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
import { Control, randomId } from './index';

export type SelectControl = Control & {
    name: string;
    options: Array<string>;
    multiple?: boolean;
}

export const isSelect = (arg: Control): arg is SelectControl => arg.type.toLowerCase() === 'select';

/**
 * Renders a select input.
 * 
 * @param {SelectControl} control
 * @returns 
 */
export const renderSelect = (control: SelectControl) => {
    const { multiple, options, name } = control;

    return (<Form.Control key={`${name}`} {...control} as='select' multiple={multiple}>
        {options.map((option, index) => <option key={`${name}-option-${index}`}>{option}</option>)}
    </Form.Control>)
}
