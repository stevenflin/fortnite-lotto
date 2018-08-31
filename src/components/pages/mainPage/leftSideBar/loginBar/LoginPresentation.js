import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';
import LoginOptions from './LoginOptions';
import ManualLogin from './ManualLogin'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      manualLogin: false
    }
  }

  manualLogin(e){
    e.preventDefault()
    this.setState({
      manualLogin: !this.state.manualLogin
    })
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup>
          <Col sm={10}>
            {this.state.manualLogin ? <ManualLogin toggleManualLogIn={(e) => this.manualLogin(e)} /> : <LoginOptions toggleManualLogIn={(e) => this.manualLogin(e)} toggleSignIn={(e) => this.props.toggleSignIn(e)} />}
          </Col>
        </FormGroup>
    </Form>
    )
  }
}
