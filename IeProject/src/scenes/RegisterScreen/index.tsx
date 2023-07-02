import {Alert, ScrollView, StatusBar, View} from 'react-native';
import styles from './styles';
import React from 'react';
import HeaderRegisterComponent from './components/headerRegisterComponent';
import {TITULO_BUTTON_TELA_REGISTRO, TITULO_HEADER_TELA_REGISTRO} from '../../resources/values/strings';
import InputLoginComponent from '../../components/inputComponent';
import UseRegisterScreen from './hook/UseRegisterScreen';
import ButtonComponent from './components/button';

const RegisterScreen = ({navigation}: any) => {
  const {        
    name,
    newEmail,
    newPassword,
    setName,
    setNewEmail,
    setNewPassword
  } = UseRegisterScreen()
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CEEBF7" barStyle="default" />
      <ScrollView>
        <View style={styles.containerHeader}>
          <HeaderRegisterComponent
            name={TITULO_HEADER_TELA_REGISTRO}
            route={() => navigation.navigate('LoginScreen')}
          />
        <InputLoginComponent
          label="Nome"
          placeholder="Digite seu nome"
          type="default"
          secure={false}
          data={name}
          setData={setName}
        />
        <InputLoginComponent
          label="Email"
          placeholder="Digite seu email"
          type="email-address"
          secure={false}
          data={newEmail}
          setData={setNewEmail}
        />
          <InputLoginComponent
            label="Senha"
            placeholder="Digite uma senha"
            type="default"
            secure={true}
            data={newPassword}
            setData={setNewPassword}
          />

          <ButtonComponent 
            text={TITULO_BUTTON_TELA_REGISTRO} 
            route={() => navigation.navigate('LoginScreen')}            
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default RegisterScreen