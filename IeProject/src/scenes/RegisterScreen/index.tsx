import {ScrollView, StatusBar, Text, View} from 'react-native';
import styles from './styles';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CEEBF7" barStyle="default" />
      <ScrollView>
        <View style={styles.containerHeader}>
          <Text>Registro</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;