import React, { Component } from 'react';

export default class MiniProfile extends Component {
	render() {
		return (
			<div id='mini-profile'>
				<div>
					<img src="https://d1u5p3l4wpay3k.cloudfront.net/fortnite_esports_gamepedia_en/thumb/2/2f/Ninja_Vegas_2018.png/217px-Ninja_Vegas_2018.png?version=281f0dc1212fefc60eb922e888a482a0" nopin="nopin"/>
					<h4>
						@Ninja
					</h4>
				</div>
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
