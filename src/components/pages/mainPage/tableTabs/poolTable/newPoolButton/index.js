import { connect } from 'react-redux';

import NewPoolButton from './NewPoolButton';

import { toggleModal } from '../../../../../../redux/actions/uiActions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	openCreateModal: () => dispatch(toggleModal('showCreateModal')),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPoolButton);