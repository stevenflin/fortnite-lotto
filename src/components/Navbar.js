import React, { Component } from 'react';

import '../css/Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<div id='nav-bar'>
				<img src="https://cdn140.picsart.com/260086312008212.png?r1024x1024" className="landLogo" alt="logo" />
				<span id='nav-span'>Fortnite Lottery</span>
			</div>
		);
	}
}
