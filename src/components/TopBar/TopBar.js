import React from 'react';
import { Text, View } from 'react-native';
import s from './TopBar.styles';

const TopBar = ({ displayText }) => (
  <View style={s.container}>
    <Text style={s.text}>{displayText}</Text>
  </View>
);

export default TopBar;