import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StoreContext } from '../../store';
import { TabBarItem } from '../../components/TabBarItem';
import { screens, texts, constants } from '../../config';
import s from './TabBar.styles';

class TabBar extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {({ currentScreen, setCurrentScreen }) => (
          <View style={s.container}>
            <TabBarItem
              displayText={texts.screens.focus}
              isActive={currentScreen.title === screens.timer.title}
              iconType={constants.TABBAR_ICONS.FOCUS}
              onPress={() => setCurrentScreen(screens.timer)}
            />

            <TabBarItem
              displayText={texts.screens.log}
              isActive={currentScreen.title === screens.log.title}
              iconType={constants.TABBAR_ICONS.LOG}
              onPress={() => setCurrentScreen(screens.log)}
            />

            <TabBarItem
              displayText={texts.screens.goal}
              isActive={currentScreen.title === screens.goals.title}
              iconType={constants.TABBAR_ICONS.GOAL}
              onPress={() => setCurrentScreen(screens.goals)}
            />
          </View>
        )}
      </StoreContext.Consumer>
    );
  }
}

export default TabBar;
