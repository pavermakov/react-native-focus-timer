import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  containerLarge: {
    transform: [
      { scale: 1.1 },
    ],
    opacity: 1,
  },
  icon: {
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});