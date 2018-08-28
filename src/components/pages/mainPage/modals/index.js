import React, { Component, Fragment } from 'react';

import CreateModal from './createModal/CreateModalContainer';
import JoinModal from './joinModal/JoinModalContainer';

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