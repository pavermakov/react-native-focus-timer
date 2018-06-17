import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import s from './TabBarItem.styles';

const TabBarItem = ({ iconType, iconSize = 25, displayText }) => (
  <View style={s.container}>
    <Icon
      style={s.icon}
      name={iconType}
      size={iconSize}
    />

    <Text style={s.text}>{displayText}</Text>
  </View>
);

export default TabBarItem;