# Bootstrap Form Helper

A simple library to generate react-bootstrap forms from js objects.

### Dependencies

This library is built for react-bootstrap only. It will not work on any other bootstrap implementations.

### Example

```
    const loginForm = [
        [
            {type: 'email', name: 'email', placeholder: 'E-post', value: email, onChange: handleEmail}
        ],
        [
            {type: 'password', name: 'password', placeholder: 'Lösenord', value: password, onChange: handlePassword}
        ],
        [
            {type: 'submit', title: 'Logga in'},
        ]
    ];

    return (
        <Form>
            renderForm(loginForm)
        </Form>
    );
```
