import React from 'react';
import styled from 'styled-components'
import { Form , Field , Button , CheckBox , ComboBox , Input , Label , Styled } from '../juanform'

const options = [
  {value:"1",label:"One"},
  {value:"2",label:"Two"}
]

const Title = styled.div`
  font-weight: bold;
  font-size: 120%;
  padding: 5px;
`

const PaddedDiv = styled.div`
  padding: 10px;
`

const CustomLabel = Styled.Label`
  color: blue;
  padding: 10px;
`

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      submitted: false
    }
  }

  handleSubmit = (state) => {
    this.setState({ submitted: true , form: state });
    console.log(state);
  }

  renderState = () => {
    const { form } = this.state
    let text = []
    let i = 0
    for (let field in form) {
      if (form.hasOwnProperty(field)) {
        text.push(
          <div key={i}>
            <span><span>{`${field} : `}</span>{`${form[field]}`}</span>
          </div>
        )
        i++;
      }
    }
    return text;
  }

  render(){
    const { submitted , state } = this.state;
    return(
      <React.Fragment>
        <Title>Form:</Title>
        <Form id={"form"} onSubmit={this.handleSubmit}>
          <Field>
            <Label htmlFor={"text"} >Text</Label>
            <Input id={"text"} name="textField" placeholder={"Some text..."}/>
          </Field>
          <Field>
            <Label as={CustomLabel} htmlFor={"text2"} >Text With Custom Label</Label>
            <Input id={"text2"} name="textFieldWithCustomLabel" placeholder={"Some text..."}/>
          </Field>
          <Field>
            <Label htmlFor={"check"} >CheckBox</Label>
            <CheckBox id={"check"} name={"checkbox"} />
          </Field>
          <Field>
            <Label htmlFor={"combo"} >ComboBox</Label>
            <ComboBox id={"combo"} name={"comboBox"} options={options}/>
          </Field>
          <Field>
            <Label htmlFor={"combo2"}>Another ComboBox</Label>
            <ComboBox id={"combo2"} name={"anotherComboBox"}>
              <ComboBox.Option value={1}>One</ComboBox.Option>
              <ComboBox.Option>Two</ComboBox.Option>
            </ComboBox>
          </Field>
          <Button submit>Submit</Button>
        </Form>
        { submitted &&
          <PaddedDiv>
            <Title>State:</Title>
            <PaddedDiv>
              {this.renderState()}
            </PaddedDiv>
          </PaddedDiv>
        }
      </React.Fragment>
    )
  }
}

export default App;
