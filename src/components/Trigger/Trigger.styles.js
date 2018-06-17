import { StyleSheet } from 'react-native';

const size = 60;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    backgroundColor: 'red',
    borderRadius: size / 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: .3,
    elevation: 1,
  },
  icon: {
    color: 'white',
  },
  iconShifted: {
    position: 'relative',
    top: 1,
    left: 3,
  },
});

