import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../../css/Main.css';

import TableTabs from './tableTabs';
import LeftSideBar from './leftSideBar';
import Modals from './modals';

export default class MainPage extends Component {

  componentDidMount() {
    this.props.fetchActiveUser();
  }

  render() {
    return (
      <div>
        <Modals />
      	<Col md={3}>
      		<LeftSideBar />
      	</Col>
      	<Col md={9}>
          {/* TODO: this is a temp fix to load data, but there is an error in the console */}
        	{!this.props.isFetching && <TableTabs />}
        </Col>
      </div>
    );
  }
}
