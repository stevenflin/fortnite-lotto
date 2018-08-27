import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../../css/Main.css';

import Tables from './Tables';
import MiniProfile from './MiniProfileContainer';
import AccessProfile from './AccessPresentation';

export default class Main extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchActiveUser();
  }

  render() {
    return (
      <div>
      	<Col md={3}>
      		<AccessProfile />
      	</Col>
      	<Col md={9}>
        	<Tables />
        </Col>
      </div>
    );
  }
}
