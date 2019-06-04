# JuanForm

This is a library of React 16 pre-built form components. All components are functional components using hooks.

## Usage

The main component is the Form component. It will save the current state of the form.
It uses the "name" prop of the components inside to save each value. If no "name" prop is given, it will try to use the "id" prop instead. Every form component must have either an id or a name.

```javascript
import React from 'react';
import { Button , Form , Input } from 'juanform';

function mySubmitFunction(state){
  console.log(state); //{ someInput: ... }
}

class MyForm extends React.Component {
  render(){
    return(
      <Form onSubmit={mySubmitFunction}>
        <Input name="someInput"/>
        <Button submit>Submit</Button>
      </Form>
    )
  }
}
```

The onSubmit prop of Form, receives a callback and the callback will receive the state as parameter. If a valid component inside the form hasn't changed, it will not appear inside the state even if it has a "name" prop. Valid form components are Button, Input, ComboBox, CheckBox and Field. All other components will be ignored but will still be rendered.

## Custom Styled Components

All components have an "as" prop to pass a styled-component to replace the default component. The passed component should match the default component's tag though this is not enforced in any way. As an utility, the Styled module can be used to add custom styles without having to explicitly know which tag belongs to each component. The use of the "as" prop will completely erase the default styles (which as of this version are basically none) so if this behavior is not desired, the Styled module includes the default styles for each comnponent as to be able to take full advantage of styled-components extension capabilities.
Form only checks for immediate children. Meaning that if you need to wrap the component inside a different component to give a particular style, you should use the Field component. The Field component is just a wrapper for this particular case.

```javascript
import React from 'react';
import styled from 'styled-components'
import { Button , Field , Form , Input , Label , Styled } from 'juanform';

function mySubmitFunction(state){
  console.log(state); //{ someInput: ... }
}

const CoolField = Styled.Field`
   ...custom style...
`

const CoolLabel = styled(Styled.Defaults.Label)`
   ...custom extended style...
`

class MyForm extends React.Component {
  render(){
    return(
      <Form onSubmit={mySubmitFunction}>
        <Field as={CoolField}>
          <Label as={CoolLabel}>{"I'm a label"}</Label>
          <Input name="someInput"/>
        </Field>
        <Button submit>Submit</Button>
      </Form>
    )
  }
}
```


## Advanced: Changing the Default behavior of the Form component

By default, all that the Form component does is iterate over its children, checking the "formElement" static attirbute of their classes to see how to bind the element to its state. The only condition is that the Form expects this components to return their information (id or name at least) when the proper event occurs. It will override the "onClick" and "onChange" props of every child component given that the formElement is one of the following strings: Button, Input, CheckBox, ComboBox, Field or Label (Field is a special case where the transform prop is added. Nothing is changed of Label as of yet). You can create valid Form components using the Utilities provided in the Utils module. The easiest way to do is without too much code is by returning a pre-built Form component inside your custom component like this:

```javascript
import React from 'react'
import { Form , Input , Label , Utils } from 'juanform'
const { createInput } = Utils;

const CustomInput = createInput((props) => <Input {...props}/>)

const MyForm = () => {
  return(
    <Form>
      <Label>My Custom Input</Label>
      <CustomInput/>
    </Form>
  )
}

```

The utility functions don't do much. They only define a property inside the component prototype.
There is also a way to change how the Form component transforms its children. Through the createCustomForm utility method. It receives a function and calls it with a child and must return the transformed child. This does not override the Form's default behavior. Only extends it. A simpel example:

```javascript
import React from 'react'
import { Form , Utils } from 'juanform'
const { createCustomForm } = Utils;

const customTransformation = (child,form) => {
  if( child.formElement === "custom" ){
    child.transformed = true;
  }
  return child
}

const MyForm = createCustomForm(customTransformation);
```

### Form

Basic component of juanform. Saves the values of valid form components inside its state. Valid form components are Button, Input, ComboBox and CheckBox. The Field component is also valid but it is only a wrapper to add style.

| Props       | Type     | Default Value | Description     |
| ----------- | -------- | :-----------: | --------------- |
| onSubmit    | function | undefined     | It is a callback that receives a state upon submission|
| id          | string   | undefined     | id of the html form tag |


### Button

| Props       | Type     | Default Value | Description     |
| ----------- | -------- | :-----------: | --------------- |
| submit      | boolean  | false         | Decides whether this button causes a submit to happen |
| onClick     | function | undefined     | Callback that receives the event and all button props. If submit is true, the Form component will handle this event and override the value of onClick. |
| label       | any      | props.children | Text to be displayed inside button |
| id          | string   | undefined     | id of the html button tag |

### Input

| Props       | Type     | Default Value | Description     |
| ----------- | -------- | :-----------: | --------------- |
| name        | string   | undefined     | prop used by form to save this component's value |
| type        | string   | "text"        | Type of html input. It cannot be "radio" or "checkbox". For these cases use their respective components |
| placeholder | string   | undefined     | Placeholder for input |
| onChange    | function | undefined     | Callback that receives the event and the props of the component. If inside a Form, this prop will be overridden. |
| id          | string   | undefined     | id of html input tag |

### ComboBox

| Props       | Type     | Default Value | Description     |
| ----------- | -------- | :-----------: | --------------- |
| options     | Array    | undefined     | Array that contains options to display on the ComboBox. Each option must have a "value" and "label" property. The value is the stored value and label is the displayed text. |
| name        | string   | undefined     | prop used by form to save this component's value |
| onChange    | function | undefined     | Callback that receives the event and the props of the component. If inside a Form, this prop will be overridden. |
| id          | string   | undefined     | id of the html select tag |

### CheckBox

| Props       | Type     | Default Value | Description     |
| ----------- | -------- | :-----------: | --------------- |
| checked     | boolean  | false         | Starting value of the checkbox |
| name        | string   | undefined     | prop used by form to save this component's value |
| onChange    | function | undefined     | Callback that receives the event and the props of the component. If inside a Form, this prop will be overridden. |
| id          | string   | undefined     | id of the html input tag |
