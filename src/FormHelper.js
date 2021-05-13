'use strict'

import React from 'react'
import { Form, Col } from 'react-bootstrap'


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

/**
 * Simple helper to generate a react-bootstrap form, using javascript objects rather than
 * jsx.
 */
export default class FormHelper {

    /**
     * Helper method to check if argument is an object.
     * 
     * @param {object} object 
     * @returns true/false
     */
    static obj = (object) => (object instanceof Object)

    /**
     * Helper to generate a random string, used to create unique keys.
     * 
     * @returns string
     */
    static randomId = () => (
        Math.random().toString(36).substr(2, 9)
    )

    /**
     * Renders a select input.
     * 
     * @param {object} control
     * @returns 
     */
    static renderSelect = ({options, multiple, ...control}) => {
        const id = randomId()

        return (<Form.Control key={`${control.name}-${id}`} {...control} as='select' multiple={multiple}>
            {options.map((option, index) => <option key={`${control.name}-${id}-option-${index}`}>{option}</option>)}
        </Form.Control>)
    }

    /**
     * Renders a label.
     * 
     * @param {control} control 
     * @returns <Form.Label />
     */
    static renderLabel = ({label, ...control}) => (
        (control.type === 'file' || control.type === 'check') ? <React.Fragment /> : 
        obj(label) && 'type' in label ? renderControl(label) :
        obj(label) ? renderControl({type: 'label', ...label}) :
        typeof label === 'string' ? renderControl({type: 'label', title: label}) :
        <React.Fragment />
    )

    /**
     * Renders a file input.
     * 
     * @param {object} control
     * @returns 
     */
    static renderFile = ({label, ...control}) => {
        if (obj(label) && 'title' in label) {
            label = label.title
        }
        return <Form.File key={`${control.name}-${randomId()}`} {...{label, ...control}} />
    }

    /**
     * Renders a checkbox group.
     * 
     * @param {object} control 
     * @returns 
     */
    static renderCheckbox = ({inline, name, labels, ...control}) => (
        <div key={`${name}-${randomId()}-checkbox`}>
            {labels.map((label, index) => (<Form.Check
                key={`${name}-${randomId()}-checkbox-${index}`}
                type='checkbox'
                id={label}
                label={label}
                inline={inline} />))}
        </div>
    )

    /**
     * Renders a radio group.
     * 
     * @param {object} control 
     * @returns 
     */
    static renderRadio = ({name, labels, ...control}) => {
        return (<div key={`${name}-${randomId()}-checkbox`}>
            {labels.map((label, index) => (<Form.Check
                key={`${name}-${randomId()}-checkbox-${index}`}
                type='checkbox'
                id={label}
                label={label} />))}
        </div>)
    }

    /**
     * Renders a single control.
     * 
     * @param {object} control 
     * @returns <Form.Control />
     */
    static renderControl = (control) => (
        control.type === 'label' ? <Form.Label key={`${control.name}-${randomId()}-label`}>{control.title}</Form.Label> :
        control.type === 'text' ? <Form.Control type="text" key={`${control.name}-${randomId()}`} {...control} /> :
        control.type === 'select' ? renderSelect(control) :
        control.type === 'textarea' ? <Form.Control key={`${control.name}-${randomId()}`} {...control} as='textarea' /> :
        control.type === 'file' ? renderFile(control) :
        control.type === 'range' ? <Form.Control key={`${control.name}-${randomId()}`} type='range' {...control} /> :
        control.type === 'check' ? renderCheckbox(control) :
        control.type === 'radio' ? renderRadio(control) :
        <Form.Control key={`${control.name}-${randomId()}`} {...control} />
    )

    /**
     * Renders a form group containing an optional label and a control.
     * 
     * @param {object} control 
     * @returns <Form.Group />
     */
    static renderGroup = ({label, ...controls}) => {
        if (control === '-') {
            return (<hr key={randomId()} />)
        } else {
            return (<Form.Group as={Col} key={`${control.name}-group`} controlId={control.name}>
                {label && renderLabel({label, ...control})}
                {renderControl({label, ...control})}
            </Form.Group>)
        }
    }

    /**
     * Renders a row inside the form.
     * 
     * @param {array} controls 
     * @returns <Form.Row />
     */
    static renderRow = (controls) => (
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
    static renderForm = (form) => (
        controls.map(control => (
            Array.isArray(control) ? renderRow(control) : renderRow([control])
        ))
    )
}

export const renderForm = FormHelper.prototype.renderForm
