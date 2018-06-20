import React, { Component } from 'react';
import { View } from 'react-native';
import s from './ToolBar.styles';

const ToolBar = ({ children }) => {
  return (
    <View style={s.container}>
      {children}
    </View>
  );
}

export default ToolBar;

