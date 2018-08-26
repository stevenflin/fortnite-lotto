import { connect } from 'react-redux';

import PoolTableButtons from './PoolTableButton';

import { toggleModal, setModalData } from '../../../../../../redux/actions/uiActions';

const mapStateToProps = state => ({
	showViewModal: state.ui.main.modals.showViewModal,
	showJoinModal: state.ui.main.modals.showJoinModal,
});

const mapDispatchToProps = dispatch => ({
	openViewModal: () => dispatch(toggleModal('showViewModal')),
	openJoinModal: (pool) => {
		dispatch(setModalData(pool));
		dispatch(toggleModal('showJoinModal'));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolTableButtons);