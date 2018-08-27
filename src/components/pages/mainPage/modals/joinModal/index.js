import { connect } from 'react-redux';

import JoinModal from './JoinModal';

import { toggleModal } from '../../../../../redux/actions/uiActions';
import { joinPool } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
	isOpen: state.ui.main.modals.showJoinModal,
	pool: state.ui.main.activePool,
	userId: state.users.activeUser._id,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => dispatch(toggleModal('showJoinModal')),
	joinPool: (record) => {
		dispatch(joinPool(record));
		dispatch(toggleModal('showJoinModal'));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinModal);