import {Alert, ScrollView, StatusBar, View} from 'react-native';
import styles from './styles';
import React from 'react';
import HeaderRegisterComponent from './components/headerRegisterComponent';
import { TITULO_HEADER_TELA_REGISTRO } from '../../resources/values/strings';

const RegisterScreen = (navigation: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CEEBF7" barStyle="default" />
      <ScrollView>
        <View style={styles.containerHeader}>
<HeaderRegisterComponent 
            name={TITULO_HEADER_TELA_REGISTRO} 
            route={() => Alert.alert('Login')}    
            //route={() => navigation.navigate('Login')}          
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;