import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Login from '../loginBar';
import Register from '../registerBar';
import AccessButtons from './AccessButtons'

export default class AccessProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleRegister: false,
      toggleSignIn: false,
      toggleAccess: true
    }
  }

  toggleRegisterForm(e) {
    e.preventDefault()
    this.setState({
      toggleRegister: !this.state.toggleRegister,
      toggleAccess: !this.state.toggleAccess
    })
  }

  toggleSignIn(e) {
    e.preventDefault()
    this.setState({
      toggleSignIn: !this.state.toggleSignIn,
      toggleAccess: !this.state.toggleAccess
    })
  }

	render() {
		return (
			<div>
        <Jumbotron id='access-profile'>
          <h1 id='access-profile-title' style={{fontSize: "2em"}}>
            Welcome to the best platform for Fortnite betting!
          </h1>
          <hr />
          <p id='access-profile-description'>
            Make money, and have fun!
          </p>
          {this.state.toggleAccess ? <AccessButtons toggleSignIn={(e) => this.toggleSignIn(e)} toggleRegisterForm={(e) => this.toggleRegisterForm(e)} /> : null}
          {this.state.toggleRegister ? <Register toggleRegisterForm={(e) => this.toggleRegisterForm(e)} /> : null }
          {this.state.toggleSignIn ? <Login toggleSignIn={(e) => this.toggleSignIn(e)} /> : null }
        </Jumbotron>
			</div>
		);
	}
}
