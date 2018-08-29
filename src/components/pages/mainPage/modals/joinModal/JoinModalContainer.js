import { connect } from 'react-redux';

import JoinModal from './JoinModalPresentation';

import { toggleModal } from '../../../../../redux/actions/uiActions';
import { joinPool } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
	isOpen: state.ui.main.modals.showJoinModal,
	pool: state.ui.main.activePool,
	user: state.users.activeUser,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => dispatch(toggleModal('showJoinModal')),
	joinPool: (record, entry) => {
		dispatch(joinPool(record, entry));
		dispatch(toggleModal('showJoinModal'));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinModal);