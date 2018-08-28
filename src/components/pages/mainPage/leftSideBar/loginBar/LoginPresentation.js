import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

export default class Login extends Component {

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="form-horizontal-email">
          <Col sm={2}>
            Email
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="form-horizontal-password">
          <Col sm={2}>
            Password
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={10}>
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={10}>
            <Button type="submit">Login</Button>
            {' '}
            <Button onClick={(e) => this.props.toggleRegisterForm(e)} type="submit">New here?</Button>
          </Col>
        </FormGroup>
    </Form>
    )
  }
}
