import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  image: {
    height: 30,
    width: 30,
  },

  buttonHeader: {
    width: 30,
    height: 30,
  },

  headerText: {
    marginLeft: 30,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#688591',
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleList: {
    marginTop:10,
    fontSize: 18,
    fontWeight: '500',
    color: '#688591',
  },

  textList: {
    marginLeft: 30,
  },
});

export default styles;
