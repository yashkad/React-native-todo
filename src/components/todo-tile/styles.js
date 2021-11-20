import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemContainer: {
    borderWidth: 0.9,
    borderColor: '#4b7bec',
    marginVertical: 5,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  done: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#2f3640',
    borderRadius: 6,
    marginRight: 15,
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#2f3542',
  },
});
