import { connect } from 'react-redux';

import CreateModal from './CreateModalPresentation';

import { toggleModal } from '../../../../../redux/actions/uiActions';
import { handlePoolFieldChange } from '../../../../../redux/actions/poolsActions';
import { createPool, fetchPools } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
	isOpen: state.ui.main.modals.showCreateModal,
	activeUser: state.users.activeUser,
	pool: state.pools.pool,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => dispatch(toggleModal('showCreateModal')),
	createPool: async (userId, pool) => {
		await dispatch(createPool(userId, pool));
		await dispatch(fetchPools(userId));
		dispatch(toggleModal('showCreateModal'));
	},
	handlePoolNameChange: (value) => dispatch(handlePoolFieldChange('name', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal);