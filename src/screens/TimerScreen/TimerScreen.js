import React from 'react';
import { StoreContext } from '../../store';
import { Timer } from '../../containers/Timer';

const TimerScreen = () => (
  <StoreContext.Consumer>
    {({ timerProps }) => <Timer {...timerProps} />}
  </StoreContext.Consumer>
);

export default TimerScreen;
