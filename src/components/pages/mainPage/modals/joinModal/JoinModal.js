import React, { Component } from 'react';
import Modal from 'react-modal';

import { generateColor } from '../../../../../helpers/colors';

Modal.setAppElement('#root');

const style = {
  content : {
    top: '30%',
    left: '20%',
    right: '20%',
    bottom: '50%',
  }
};

export default class JoinModal extends Component {

	joinPool = () => {
		let userId = this.props.userId;
		let poolId = this.props.pool._id;
		this.props.joinPool({userId, poolId});
	}

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.closeModal}
				style={style}
			>
				<h3>
					Are you sure you want to join the following pool? 
					&nbsp;
					<span style={{color: generateColor(this.props.pool.entry)}}>
						{this.props.pool.name} ({this.props.pool.entry} to enter)
					</span>
				</h3>
				<div className='pull-right'>
					<div className='cancel-btn' onClick={this.props.closeModal}>
	          CANCEL
	        </div>
	        <div className='confirm-btn' onClick={this.joinPool}>
	          CONFIRM
	        </div>
        </div>
			</Modal>
		);
	}
}