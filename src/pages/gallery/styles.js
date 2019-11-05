import { StyleSheet } from 'react-native';
import { colors } from '../../styles/common';

export default ({ width, height }) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      width,
      height,
      backgroundColor: colors.black[100],
    },
    image: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    imageWrapper: {
      flex: 1,
      flexDirection: 'column',
    },
    list: {
      marginBottom: 50,
    },
  });
