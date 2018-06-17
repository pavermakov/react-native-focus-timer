import React, { Component } from 'react';
import { Text } from 'react-native';
import { StoreContext } from '../store';

class Navigator extends Component {
  renderScreen = ({ currentScreen }) => {
    return currentScreen.component;
  };

  render() {
    return (
      <StoreContext.Consumer>
        {this.renderScreen}
      </StoreContext.Consumer>
    );
  }
}

export default Navigator;