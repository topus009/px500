import { StyleSheet } from 'react-native';
import { colors } from '../../styles/common';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: '100%',
    backgroundColor: colors.black[100],
  },
  image: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    resizeMode: 'contain',
  },
});
