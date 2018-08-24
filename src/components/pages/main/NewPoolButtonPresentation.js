import React, { Component } from 'react';

export default class NewPoolButton extends Component {
	render() {
		return (
			<div className='new-pool-btn' onClick={this.props.openCreateModal}>
        +
      </div>
		);
	}
}