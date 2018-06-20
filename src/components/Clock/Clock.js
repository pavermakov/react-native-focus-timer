import React, { Component } from 'react';
import { Text, View } from 'react-native';
import s from './Clock.styles';

const Clock = ({ value }) => (
  <Text style={s.text}>{value}</Text>
);

export default Clock;