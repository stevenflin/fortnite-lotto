import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordconfirm: ''
    }
  }

  clickRegister(e) {
    e.preventDefault()
    fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((res) => {
      if (res.status !== 200) {
        return res.text();
      }
      else {
        return res.json();
      }
    })
    .then((resJson) => {
      if (resJson.success) {
        this.props.toggleRegisterForm(e);
      }
    })
    .catch((err) => console.log("Error in registration axios call", err))
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="form-horizontal-name">
          <Col sm={2}>
            Name
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="form-horizontal-email">
          <Col sm={2}>
            Email
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="form-horizontal-password">
          <Col sm={2}>
            Password
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="form-horizontal-confirm-password">
          <Col sm={4}>
            Confirm Password
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="password" placeholder="Confirm Password" value={this.state.passwordconfirm} onChange={(e) => this.setState({ passwordconfirm: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col sm={10}>
            <Button type="submit" onClick={(e) => this.clickRegister(e)}>Register</Button>
            {' '}
            <Button type="submit" onClick={(e) => this.props.toggleRegisterForm(e)} >Back to Login</Button>
          </Col>
        </FormGroup>
    </Form>
    )
  }
}
