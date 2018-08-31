import { connect } from 'react-redux';

import PoolTable from './PoolTablePresentation';

import { fetchPools } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
  userId: state.users.activeUser._id,
	pools: state.pools.list,
	errorFetchingPools: state.pools.errorFetchingPools,
});

const mapDispatchToProps = dispatch => ({
	fetchPools: (userId) => dispatch(fetchPools(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolTable);