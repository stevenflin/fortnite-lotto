import React, { Component } from 'react';

import MiniProfile from './miniProfile/MiniProfileContainer';
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
				<MiniProfile />
				{/* {this.state.userIsLoggedIn ? <MiniProfile /> : <AccessProfile />} */}
			</div>
		);
	}
}
