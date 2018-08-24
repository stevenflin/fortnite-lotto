import React from 'react';
import Navbar from '../Navbar.js';
import { Col } from 'react-bootstrap';

export default class LandingPresentation extends React.Component{
  cosntructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Col md={3}>
          <TopEvents />
        </Col>
        <Col md={9}>
          <IntroPage />
        </Col>
      </div>
    )
  }
}
