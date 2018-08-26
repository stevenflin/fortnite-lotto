import { connect } from 'react-redux';

import EntryButton from './EntryButton';

import { handlePoolFieldChange } from '../../../../../../redux/actions/poolsActions';

const mapStateToProps = (state, ownProps) => ({
	isSelected: state.pools.pool.entry === ownProps.value,
});

const mapDispatchToProps = dispatch => ({
	handlePoolEntryChange: (value) => dispatch(handlePoolFieldChange('entry', value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryButton);