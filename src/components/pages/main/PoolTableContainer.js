import { connect } from 'react-redux';

import PoolTable from './PoolTablePresentation';

import { fetchPools } from '../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
	pools: state.pools.list,
	errorFetchingPools: state.pools.errorFetchingPools,
});

const mapDispatchToProps = dispatch => ({
	fetchPools: () => dispatch(fetchPools()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoolTable);