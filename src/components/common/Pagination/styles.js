import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.gray[100],
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 10,
  },
  page: {
    color: colors.white[100],
  },
  pageItem: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 15,
  },
  activePageItem: {
    backgroundColor: colors.gray[200],
  },
});
