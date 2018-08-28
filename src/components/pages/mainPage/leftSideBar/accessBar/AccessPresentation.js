import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import Login from '../loginBar';
import Register from '../registerBar';

export default class AccessProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      register: false
    }
  }

  register(e) {
    e.preventDefault()
    this.setState({
      register: !this.state.register
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
          {this.state.register ? <Register register={(e) => this.register(e)} /> : <Login register={(e) => this.register(e)} /> }
        </Jumbotron>
			</div>
		);
	}
}
