import React, { Component } from 'react';
import { StoreContext } from '../../store';
import { Log } from '../../containers/Log';

class LogScreen extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({ logProps }) => <Log {...logProps} />}
      </StoreContext.Consumer>
    );
  }
}

export default LogScreen;
