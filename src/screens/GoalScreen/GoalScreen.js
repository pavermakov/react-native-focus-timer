import React from 'react';
import { StoreContext } from '../../store';
import { Goal } from '../../containers/Goal';

const GoalScreen = () => (
  <StoreContext.Consumer>
    {({ goalProps }) => <Goal {...goalProps} />}
  </StoreContext.Consumer>
);

export default GoalScreen;
