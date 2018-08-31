import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class LoginOptions extends Component {
  render() {
    return(
      <div>
        <Button type="submit" onClick={(e) => this.props.toggleManualLogIn(e)}>Sign in with e-mail</Button>
        {' '}
        <Button type="submit"><a href="http://localhost:8080/api/auth/google">Sign in with Google</a></Button>
        {' '}
        <Button type="submit" onClick={(e) => this.props.toggleSignIn(e)}>Back to Home</Button>
      </div>
    )
  }
}
