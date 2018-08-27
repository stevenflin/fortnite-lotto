import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../../css/Main.css';

import TableTabs from './tableTabs';
import LeftSideBar from './leftSideBar';
import Modals from './modals';
import AccessProfile from '../main/AccessPresentation';

export default class MainPage extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchActiveUser();
  }

  render() {
    return (
      <div>
        <Modals />
      	<Col md={3}>
      		{/* <LeftSideBar /> */}
      		<AccessProfile />
      	</Col>
      	<Col md={9}>
        	<TableTabs />
        </Col>
      </div>
    );
  }
}
