import { connect } from 'react-redux';

import YourTable from './YourTablePresentation';

import { fetchActiveUserPools } from '../../../../../redux/asyncActions/poolsAsyncActions';

const mapStateToProps = state => ({
  activeUserPools: state.pools.activeUserPools,
  userId: state.users.activeUser._id,
});

const mapDispatchToProps = dispatch => ({
  fetchActiveUserPools: (userId) => dispatch(fetchActiveUserPools(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(YourTable);