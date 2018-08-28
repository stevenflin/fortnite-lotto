import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Login from '../loginBar';
import Register from '../registerBar';

export default class AccessProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleRegister: false
    }
  }

  toggleRegisterForm(e) {
    e.preventDefault()
    this.setState({
      toggleRegister: !this.state.toggleRegister
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
          {this.state.toggleRegister ? <Register toggleRegisterForm={(e) => this.toggleRegisterForm(e)} /> : <Login toggleRegisterForm={(e) => this.toggleRegisterForm(e)} /> }
        </Jumbotron>
			</div>
		);
	}
}
