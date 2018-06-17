import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { constants } from '../../config';
import s from './Trigger.styles';

const Trigger = ({ icon, onPress }) => {
  const iconStyles = [s.icon];

  if (icon === constants.TRIGGER_ICONS.PLAY) {
    iconStyles.push(s.iconShifted)
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>
        <Icon
          style={iconStyles}
          name={icon}
          size={35}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Trigger;

