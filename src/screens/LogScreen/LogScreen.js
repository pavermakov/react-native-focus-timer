import React from 'react';
import { StoreContext } from '../../store';
import { Log } from '../../containers/Log';

const LogScreen = () => (
  <StoreContext.Consumer>
    {({ logProps }) => <Log {...logProps} />}
  </StoreContext.Consumer>
);

export default LogScreen;
