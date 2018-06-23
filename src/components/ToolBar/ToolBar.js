import React, { Component } from 'react';
import { View } from 'react-native';
import s from './ToolBar.styles';

const ToolBar = ({ children, isHidden = false }) => {
  const containerStyles = [s.container];
  const pointerEvents = isHidden ? { pointerEvents: 'none' } : {};

  if (isHidden) {
    containerStyles.push(s.containerHidden);
  }

  return (
    <View {...pointerEvents} style={containerStyles}>
      {children}
    </View>
  );
}

export default ToolBar;

