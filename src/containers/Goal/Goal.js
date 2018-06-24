import React from 'react';
import { Text, View, Image } from 'react-native';
import { texts, constants } from '../../config';
import s from './Goal.styles';

const Goal = () => (
  <View style={s.container}>
    <Text style={s.text}>{texts.underConstruction}</Text>
    <Image source={constants.IMAGES.CONSTRUCTION} />
  </View>
);

export default Goal;
