import { connect } from 'react-redux';

import { fetchActiveUser } from '../../../redux/asyncActions/usersAsyncActions';

import MainPage from './MainPagePresentation';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchActiveUser: () => dispatch(fetchActiveUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);