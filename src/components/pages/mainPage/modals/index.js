import React, { Component, Fragment } from 'react';

import CreateModal from './createModal';
import JoinModal from './joinModal';

export default class Modals extends Component {
  render() {
    return (
      <Fragment>
        <CreateModal />
        <JoinModal />
      </Fragment>
    );
  }
}