import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#2f2f2f',
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 10,
  },
  page: {
    color: 'white',
  },
  pageItem: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#494949',
    borderRadius: 15,
  },
  activePageItem: {
    backgroundColor: '#494949',
  },
});
