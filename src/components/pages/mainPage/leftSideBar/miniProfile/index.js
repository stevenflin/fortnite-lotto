import { connect } from 'react-redux';

import MiniProfile from './MiniProfile';

const mapStateToProps = state => ({
	activeUser: state.users.activeUser,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MiniProfile);