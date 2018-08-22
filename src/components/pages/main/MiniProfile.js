import React, { Component } from 'react';

export default class MiniProfile extends Component {
	render() {
		return (
			<div id='mini-profile'>
				<h4>
					@Ninja
				</h4>
				<hr />
				<div id='balance'>
					500 V-Bucks
				</div>
				<hr />
				<div id='win-stats'>
					0 Wins <span style={{color: '#d3d3d3'}}>|</span> $0 Winnings
				</div>
				<hr />
				<div id='active-bets'>
					15 Active Bets
				</div>
			</div>
		);
	}
}