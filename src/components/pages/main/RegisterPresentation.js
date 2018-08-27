import React from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';
import axios from 'axios';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordconfirm: ''
    }
  }

  _clickRegister(e) {
    e.preventDefault()
    fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordconfirm: this.state.passwordconfirm
    })
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
        this.props.register(e);
      }
    })
    .catch((err) => console.log("Error in registration axios call", err))
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Name
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Email
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col sm={2}>
            Password
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
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
            <Button type="submit" onClick={(e) => this._clickRegister(e)}>Register</Button>
            {' '}
            <Button type="submit" onClick={(e) => this.props.register(e)} >Back to Login</Button>
          </Col>
        </FormGroup>
    </Form>
    )
  }
}
