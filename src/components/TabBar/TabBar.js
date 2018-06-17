import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { TabBarItem } from '../TabBarItem';
import s from './TabBar.styles';

class TabBar extends Component {
  render() {
    return (
      <View style={s.container}>
        <TabBarItem
          iconType="ios-time-outline"
          displayText="Focus"
        />

        <TabBarItem
          iconType="ios-book-outline"
          displayText="Log"
        />

        <TabBarItem
          iconType="ios-school-outline"
          displayText="Goals"
        />
      </View>
    );
  }
}

export default TabBar;