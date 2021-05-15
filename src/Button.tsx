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
import { Button } from 'react-bootstrap';
import { Control } from '.';

export type ButtonControl = Control & {
    title: string
}

export const isButton = (arg: Control): arg is ButtonControl => arg.type.toLowerCase() === 'button';

/**
 * Renders a button.
 * 
 * @param {ButtonControl} control 
 * @returns 
 */
export const renderButton = (control: ButtonControl) => (
    <Button block {...control}>{control.title}</Button>
)

