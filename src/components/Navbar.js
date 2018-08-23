import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';

import '../css/Navbar.css';

export default class Navbar extends Component {
	render() {
		return (
			<div id='nav-bar'>
				<div>
					<img src="https://cdn140.picsart.com/260086312008212.png?r1024x1024" className="landLogo" alt="logo" style={{marginLeft: "20px"}}/>
					<span id='nav-span'>Fortnite Lottery</span>
				</div>
				<Button id="menubutton">
					<Glyphicon glyph="menu-hamburger"/>
				</Button>
			</div>
		);
	}
}
