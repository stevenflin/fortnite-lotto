import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import '../../../css/Main.css';

import Tables from './Tables';
import MiniProfile from './MiniProfileContainer';

import { fetchActiveUser } from '../../../redux/asyncActions/usersAsyncActions';

class Main extends Component {

  componentDidMount() {
    this.props.fetchActiveUser();
  }

  render() {
    return (
      <div>
      	<Col md={3}>
      		<MiniProfile />
      	</Col>
      	<Col md={9}>
        	<Tables />
        </Col>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchActiveUser: () => dispatch(fetchActiveUser()),
});

Main = connect(mapStateToProps, mapDispatchToProps)(Main);

export default Main;
