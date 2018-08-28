import React, { Component } from 'react';
import Modal from 'react-modal';

import EntryButton from './entryButton/EntryButtonContainer';

Modal.setAppElement('#root');

const style = {
  content : {
    top: '30%',
    left: '30%',
    right: '30%',
    bottom: '30%',
  }
};

export default class CreateModal extends Component {

	createPool = () => this.props.createPool(this.props.activeUser._id, this.props.pool);
	
	handlePoolNameChange = (event) => this.props.handlePoolNameChange(event.target.value);

	render() {
		return (
			<Modal
				isOpen={this.props.isOpen}
				onRequestClose={this.props.closeModal}
				style={style}
			>
				<h3>
					NEW POOL	
				</h3>
				<div className='name-field'>
					<div className='new-pool-field-item name-field-label'>Name:</div>
					<input 
						className='new-pool-field-item name-field-input' 
						onChange={this.handlePoolNameChange}
					/>
				</div>
				<div className='entry-field'> 
					<div className='new-pool-field-item entry-field-label'>Entry:</div>
					<div className='new-pool-field-item entry-field-input'>
						<EntryButton value={1} />
						<EntryButton value={10} />
						<EntryButton value={100} />
						<EntryButton value={1000} />
					</div>
				</div>
				<br/>
				<br/>
				<div className='pull-right'>
					<div className='cancel-btn' onClick={this.props.closeModal}>
	          CANCEL
	        </div>
	        <div className='confirm-btn' onClick={this.createPool}>
	          CREATE
	        </div>
        </div>
			</Modal>
		);
	}
}