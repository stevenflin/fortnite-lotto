import { connect } from 'react-redux';

import JoinModal from './JoinModalPresentation';

import { toggleModal } from '../../../redux/actions/uiActions';

const mapStateToProps = state => ({
	isOpen: state.ui.main.modals.showJoinModal,
	pool: state.ui.main.activePool,
});

const mapDispatchToProps = dispatch => ({
	closeModal: () => dispatch(toggleModal('showJoinModal')),
});

export default connect(mapStateToProps, mapDispatchToProps)(JoinModal);