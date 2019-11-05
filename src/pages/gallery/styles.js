import { StyleSheet } from 'react-native';

export default ({ width, height }) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      flex: 1,
      width,
      height,
      backgroundColor: 'black',
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
