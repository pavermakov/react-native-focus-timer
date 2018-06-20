import React, { Component } from 'react';
import { View } from 'react-native';
import s from './Row.styles';

const Row = ({ children }) => {
  return (
    <View style={s.container}>
      {children}
    </View>
  );
}

export default Row;

