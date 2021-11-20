import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInputBottom: {
    backgroundColor: '#f5f6fa',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3867d6',
    color: '#192a56',
    paddingHorizontal: 26,
    fontWeight: 'bold',
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: '#dcdde1',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    margin: 20,
    zIndex: 99,
  },
  rowBack: {
    alignItems: 'center',
    // backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    margin: 10,
  },
  actionButton: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },

  closeBtn: {
    backgroundColor: 'blue',
    right: 75,
  },

  deleteBtn: {
    backgroundColor: '#e84118',
    right: 0,
    // width: 200,
  },
  btnText: {
    color: 'white',
    // textAlign: 'right',
  },
  noTask: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
