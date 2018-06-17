import React, { Component } from 'react';
import { screens } from '../config';

const initialState = {
  currentScreen: screens.timer,
};

const StoreContext = React.createContext(initialState);

class Store extends Component {
  setCurrentScreen = (nextScreen) => {
    if (this.state.currentScreen.title === nextScreen.title) {
      return;
    }

    this.setState({ currentScreen: nextScreen });
  };

  state = {
    ...initialState,
    setCurrentScreen: this.setCurrentScreen,
  };

  render() {
    return (
      <StoreContext.Provider value={this.state}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export { Store, StoreContext };