import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { StoreContext } from '../../store';
import { TabBarItem } from '../../components/TabBarItem';
import { screens } from '../../config';
import s from './TabBar.styles';

class TabBar extends Component {
  render() {
    return (
        <StoreContext.Consumer>
          {({ currentScreen, setCurrentScreen }) => (
            <View style={s.container}>
              <TabBarItem
                displayText="Focus"
                isLarge={currentScreen.title === screens.timer.title}
                iconType="ios-time-outline"
                onPress={() => setCurrentScreen(screens.timer)}
              />

              <TabBarItem
                displayText="Log"
                isLarge={currentScreen.title === screens.log.title}
                iconType="ios-book-outline"
                onPress={() => setCurrentScreen(screens.log)}
              />

              <TabBarItem
                displayText="Goals"
                isLarge={currentScreen.title === screens.goals.title}
                iconType="ios-school-outline"
                onPress={() => setCurrentScreen(screens.goals)}
              />
            </View>
          )}
        </StoreContext.Consumer>
    );
  }
}

export default TabBar;