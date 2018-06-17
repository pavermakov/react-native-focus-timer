import React, { Component } from 'react';
import { View } from 'react-native';
import { StoreContext } from '../store';
import s from './Navigator.styles';

class Navigator extends Component {
  renderScreen = ({ currentScreen }) => {
    return currentScreen.component;
  };

  render() {
    return (
      <View style={s.container}>
        <StoreContext.Consumer>
          {this.renderScreen}
        </StoreContext.Consumer>
      </View>
    );
  }
}

export default Navigator;