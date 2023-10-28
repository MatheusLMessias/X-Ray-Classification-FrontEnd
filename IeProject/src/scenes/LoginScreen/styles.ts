import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#CEEBF7',
  },
  containerHeader: {
    backgroundColor: '#CEEBF7',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  buttonContainerLogin: {
    marginLeft: 20,
  },

  buttonContainerRegister: {
    marginRight: 20,
  },
});

export default styles;
