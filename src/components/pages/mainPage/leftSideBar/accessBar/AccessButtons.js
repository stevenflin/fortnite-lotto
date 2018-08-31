import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class AccessButtons extends Component {
  render(){
    return(
      <div>
        <Button onClick={(e) => this.props.toggleSignIn(e)}>Sign In</Button>
        {' '}
        <Button onClick={(e) => this.props.toggleRegisterForm(e)}>New Here?</Button>
      </div>
    )
  }
}
