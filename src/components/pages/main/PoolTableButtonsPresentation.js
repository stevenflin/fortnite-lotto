import React, { Component } from 'react';

export default class PoolTableButtons extends Component {
	render() {
		return (
			<div className='table-btns'>
        <div className='view-btn' onClick={this.props.openViewModal}>
          VIEW
        </div>
        <div className='join-btn' onClick={() => this.props.openJoinModal(this.props.pool)}>
          JOIN
        </div>
      </div>
		);
	}
}