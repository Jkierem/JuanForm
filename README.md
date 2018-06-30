# JuanForm

This is a library of React pre-built form components.

## Usage

The main component is the Form component. It will save the current state of the form.
It uses the "name" prop of the components inside to save each value. If no "name" prop is given, it will try to use the "id" prop instead.

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
All components have a style prop to override default styles. Currently there are no default styles.
Form only checks for immediate children. Meaning that if you need to wrap the component inside a different component to give a particular style, you should use the Field component. The Field component is just a wrapper for this particular case.

```javascript
import React from 'react';
import { Button , Field , Form , Input , Label } from 'juanform';

function mySubmitFunction(state){
  console.log(state); //{ someInput: ... }
}

const coolStyle = {...}

class MyForm extends React.Component {
  render(){
    return(
      <Form onSubmit={mySubmitFunction}>
        <Field style={coolStyle}>
          <Label>{"I'm a label"}</Label>
          <Input name="someInput"/>
        </Field>
        <Button submit>Submit</Button>
      </Form>
    )
  }
}
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
