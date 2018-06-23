import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { texts } from '../../config';
import s from './Goal.styles';

class Goal extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.text}>{texts.underConstruction}</Text>

        <Image source={require('../../assets/construction.png')} />
      </View>
    );
  }
}

export default Goal;
