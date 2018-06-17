import React, { Component } from 'react';
import { Text, View } from 'react-native';
import s from './Timer.styles';

class Timer extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text> timer screen </Text>
      </View>
    )
  }
}

export default Timer;