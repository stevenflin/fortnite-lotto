import React, { Component } from 'react';
import Modal from 'react-modal';

import { generateColor } from '../../../../../helpers/colors';

Modal.setAppElement('#root');

const style = {
  content : {
    top: '30%',
    left: '20%',
    right: '20%',
    bottom: '45%',
  }
};

export default class JoinModal extends Component {

	joinPool = () => {
		let userId = this.props.user._id;
		let poolId = this.props.pool._id;
		this.props.joinPool({userId, poolId});
	}

	render() {
		let balance = this.props.user.balance - this.props.pool.entry;
		return (
			<Modal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.closeModal}
				style={style}
			>
				{balance >= 0 
				? 
				<h3>
					Are you sure you want to join
					<span style={{color: generateColor(this.props.pool.entry)}}>
						&nbsp;{this.props.pool.name}&nbsp;
					</span>
					for
					<span style={{color: generateColor(this.props.pool.entry)}}>
						&nbsp;{this.props.pool.entry}&nbsp;
					</span>
					tokens?
					<br />
					You will have {balance} tokens remaining.
				</h3>
				:
				<h3>
					Oops! It looks like you don't have enough tokens to join 
					<span style={{color: generateColor(this.props.pool.entry)}}>
						&nbsp;{this.props.pool.name}&nbsp;
					</span>
					for
					<span style={{color: generateColor(this.props.pool.entry)}}>
						&nbsp;{this.props.pool.entry}&nbsp;
					</span>
					tokens.
					<br />
					You need <span style={{color: 'red'}}>{balance * -1}</span> more tokens to join.
				</h3>
				}
				<div className='pull-right'>
					<div className='cancel-btn' onClick={this.props.closeModal}>
	          CANCEL
	        </div>
	        {balance >= 0 &&
					<div className='confirm-btn' onClick={this.joinPool}>
	          CONFIRM
	        </div>
					}
        </div>
			</Modal>
		);
	}
}