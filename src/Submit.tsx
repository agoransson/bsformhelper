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

export type SubmitControl = Control & {
    title: string
}

export const isSubmit = (arg: Control): arg is SubmitControl => arg.type.toLowerCase() === 'submit';

/**
 * Renders a submit.
 * 
 * @param {SubmitControl} control 
 * @returns 
 */
export const renderSubmit = (control: SubmitControl) => (
    <Button key={control.name} type='submit' block {...control}>{control.title}</Button>
)

