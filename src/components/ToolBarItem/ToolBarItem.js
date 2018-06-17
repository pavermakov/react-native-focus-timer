import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { constants } from '../../config';
import s from './ToolBarItem.styles';

const ToolBarItem = ({ topText, bottomText, icon, isActive, onPress }) => {
  const iconStyles = [s.icon];
  const textStyles = [s.text];

  if (isActive) {
    iconStyles.push(s.iconActive);
    textStyles.push(s.textActive);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={s.container}>
        <Text style={textStyles}>{topText}</Text>

        <Icon
          style={iconStyles}
          name={icon}
          size={35}
        />

        <Text
          style={textStyles}
          numberOfLines={2}
        >{bottomText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default ToolBarItem;

