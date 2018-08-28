import { connect } from 'react-redux';

import CreateModal from './CreateModalPresentation';

import { toggleModal } from '../../../../../redux/actions/uiActions';
import { handlePoolFieldChange } from '../../../../../redux/actions/poolsActions';
import { createPool } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
	isOpen: state.ui.main.modals.showCreateModal,
	activeUser: state.users.activeUser,
	pool: state.pools.pool,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => dispatch(toggleModal('showCreateModal')),
	createPool: (userId, pool) => {
		dispatch(createPool(userId, pool));
		dispatch(toggleModal('showCreateModal'));
	},
	handlePoolNameChange: (value) => dispatch(handlePoolFieldChange('name', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);