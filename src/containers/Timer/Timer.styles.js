import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  header: {
    flexGrow: 0,
    width: '100%',
  },
  body: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  footer: {
    flexGrow: 0,
    width: '100%',
  },
});

