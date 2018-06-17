import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import s from './TabBarItem.styles';

const TabBarItem = ({ iconType, iconSize = 25, displayText, isLarge = false, onPress }) => {
  const containerStyles = [s.container];

  if (isLarge) {
    containerStyles.push(s.containerLarge);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyles}>
        <Icon
          style={s.icon}
          name={iconType}
          size={iconSize}
        />

        <Text style={s.text}>{displayText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabBarItem;