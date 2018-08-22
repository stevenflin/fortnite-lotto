import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router'; 

import history from '../helpers/history';

import Navbar from './Navbar';
import Main from './pages/main';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
      	<Fragment>
      		<Navbar />
      		<div id='main'>
        		<Route path='/' component={Main} />
        	</div>
        </Fragment>
      </Router>
    );
  }
}