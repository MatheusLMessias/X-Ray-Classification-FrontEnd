import {Alert, ScrollView, StatusBar, View} from 'react-native';
import styles from './styles';
import React from 'react';
import HeaderLoginComponent from './components/headerLoginComponent';
import {
  TITULO_BUTTON_TELA_LOGIN_LOGAR,
  TITULO_BUTTON_TELA_LOGIN_REGISTRAR,
  TITULO_BUTTON_TELA_REGISTRO,
  TITULO_HEADER_TELA_LOGIN,
  TITULO_HEADER_TELA_REGISTRO,
} from '../../resources/values/strings';
import InputComponent from '../../components/inputComponent';
import UseLoginScreen from './hook/UseLoginScreen';
import ButtonComponent from './components/button';

const LoginScreen = ({navigation}: any) => {
  const {email, password, setEmail, setPassword, login} = UseLoginScreen(navigation);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CEEBF7" barStyle="default" />
      <ScrollView>
        <View style={styles.containerHeader}>
          <HeaderLoginComponent name={TITULO_HEADER_TELA_LOGIN} />

          <InputComponent
            label="Email"
            placeholder="Digite seu email"
            type="default"
            secure={false}
            data={email}
            setData={setEmail}
          />
          <InputComponent
            label="Senha"
            placeholder="Digite uma senha"
            type="default"
            secure={true}
            data={password}
            setData={setPassword}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttonContainerRegister}>
              <ButtonComponent
                text={TITULO_BUTTON_TELA_LOGIN_REGISTRAR}
                route={() => navigation.navigate('RegisterScreen')}
              />
            </View>
            <View style={styles.buttonContainerLogin}>
              <ButtonComponent
                text={TITULO_BUTTON_TELA_LOGIN_LOGAR}
                route={login}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
