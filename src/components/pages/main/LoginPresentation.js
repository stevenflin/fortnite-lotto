import React from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col sm={2}>
            Email
          </Col>
          <br />
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
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
            <Button onClick={(e) => this.props.register(e)} type="submit">New here?</Button>
          </Col>
        </FormGroup>
    </Form>
    )
  }
}
