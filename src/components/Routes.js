import React, { Component, Fragment } from 'react';
import { Router, Route } from 'react-router';

import history from '../helpers/history';

import Navbar from './Navbar';
import MainPage from './pages/mainPage/MainPageContainer';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
      	<Fragment>
      		<Navbar />
      		<div id='main'>
        		<Route path='/' component={MainPage} />
        	</div>
        </Fragment>
      </Router>
    );
  }
}
