import React, { Component } from 'react';

import MiniProfile from './miniProfile';
import AccessProfile from './accessBar';

export default class LeftSideBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			userIsLoggedIn: false
		}
	}

	render() {
		return (
			<div>
			{this.state.userIsLoggedIn ? <MiniProfile /> : <AccessProfile />}
			</div>
		);
	}
}
