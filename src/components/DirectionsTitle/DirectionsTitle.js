import React from 'react'
import { Text } from 'react-native';
import s from './DirectionsTitle.styles';

const DirectionsTitle = ({ value }) => {
  return <Text style={s.text}>{value}</Text>;
};

export default DirectionsTitle;
