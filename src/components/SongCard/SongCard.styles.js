import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
  },
  artist: {
    fontWeight: '600',
    fontSize: 15,
  },
  album: {
    marginTop: 5,
  },
  year: {
    marginTop: 5,
    fontSize: 13,
    color: 'gray',
    fontWeight: 'bold',
  },
  content_container: {
    flex: 1,
    marginTop: 5,
    flexDirection: 'row',
  },
  info_container: {
    flex: 1,
  },
  soldout: {
    padding: 3,
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
  },
});
