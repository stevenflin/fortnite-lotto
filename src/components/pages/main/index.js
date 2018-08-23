import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../../../css/Main.css';

import Tables from './Tables';
import MiniProfile from './MiniProfile';

class Main extends Component {
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

export default Main;
