import React, { Component } from 'react';

export default class EntryButton extends Component {

	handlePoolEntryChange = () => this.props.handlePoolEntryChange(this.props.value);

	render() {
		return (
			<div 
				className='entry-btn' 
				id={
					this.props.isSelected
					? `entry-btn-${this.props.value}-selected`
					: `entry-btn-${this.props.value}`
				}
				onClick={this.handlePoolEntryChange}
			>
				{this.props.value}
			</div>
		);
	}
}