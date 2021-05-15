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
import { Form, Col } from 'react-bootstrap';
import {
    Control,
    LabelControl,

    isLabel,
    isText,
    isPassword,
    isEmail,
    isSelect,
    isTextarea,
    isFile,
    isRange,
    isCheckbox,
    isRadio,
    isDivider,
    isButton,
    isSubmit,

    renderLabel,
    renderText,
    renderPassword,
    renderEmail,
    renderSelect,
    renderTextarea,
    renderFile,
    renderRange,
    renderCheckbox,
    renderRadio,
    renderDivider,
    renderButton,
    renderSubmit,
} from '.';


/**
 * Renders a single control.
 * 
 * @param {Control} control 
 * @returns <Form.Control />
 */
const renderControl = (control: Control) => (
    isLabel(control) ? renderLabel(control) :
    isText(control) ? renderText(control) :
    isPassword(control) ? renderPassword(control) :
    isEmail(control) ? renderEmail(control) :
    isSelect(control) ? renderSelect(control) :
    isTextarea(control) ? renderTextarea(control) :
    isFile(control) ? renderFile(control) :
    isRange(control) ? renderRange(control) :
    isCheckbox(control) ? renderCheckbox(control) :
    isRadio(control) ? renderRadio(control) :
    isDivider(control) ? renderDivider() :
    isButton(control) ? renderButton(control) :
    isSubmit(control) ? renderSubmit(control) :
    <React.Fragment />
)

/**
 * Renders a form group containing an optional label and a control.
 * 
 * @param {object} control 
 * @returns <Form.Group />
 */
const renderGroup = (control: Control) => {
    if (isDivider(control)) {
        return renderDivider();
    }

    const { name } = control;

    return (<Form.Group as={Col} key={`${name}-group`} controlId={name}>
        {/* {label && renderLabel(label, control)} */}
        {renderControl(control)}
    </Form.Group>)
}

/**
 * Renders a row inside the form.
 * 
 * @param {array} controls 
 * @returns <Form.Row />
 */
const renderRow = (controls: Array<Control>) => (
    <Form.Row key={controls.map(control => control.name).join('.')}>
        {controls.map((control) => (
            renderGroup(control)
        ))}
    </Form.Row>
)

/**
 * Renders a complete form.
 * 
 * @param {array} form      The form, should be defined as an array.
 */
const renderForm = (controls: Array<(Control | Array<Control>)>) => (
    controls.map(control => (
        Array.isArray(control) ? renderRow(control) : renderRow([control])
    ))
)

export default renderForm;
