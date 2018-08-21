import React, { Component } from 'react';
import { Router, Route } from 'react-router'; 

import history from '../helpers/history';

import Main from './pages/main';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path='/' component={Main} />
      </Router>
    );
  }
}