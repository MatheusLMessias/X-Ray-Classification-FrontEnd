import {useEffect, useState} from 'react';
import { Alert } from 'react-native';
import Login from '../../../models/Login';
import { userService } from '../../../services';

const UseLoginScreen = (navigation: any) => {
  const [email, setEmail] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const [insertInfos, setInsertInfos] = useState<any>({});
  let invalidField = {label: "", invalid: false};

  useEffect(() => {
    setInsertInfos({email: email, senha: password});
  }, [email, password]);

  const verifyValues = () => {
    invalidField.invalid = false;
    Object.entries(insertInfos).forEach(field => {
      if (!field[1] && !invalidField.invalid)
        invalidField = {label: field[0], invalid: true}
    });
    if (invalidField.invalid){
        Alert.alert("Campo inválido", `O campo ${invalidField.label} está vazio!`, [
        {text: 'Ok', onPress: () => {}, style: 'cancel'},
      ]);
      return false
      } 
      return true;
  }

  const postLoginUser = async () => {
    try {
      const response: Login = await userService.loginUser({
        email: insertInfos.email,
        senha: insertInfos.senha
      });
      console.log(response)
      return response
    } catch (error) {
      throw error;
    }
  };

  const login = async () => {
    const verify = verifyValues();
    if(verify == true){
      const response = await postLoginUser();
      if(response){
        if(response.error){
          Alert.alert('Error: ' + response.error)
        } else {
          Alert.alert('Login efetuado com sucesso', 'Entre com email e senha na tela de login', [
            {text: 'OK', onPress: () => navigation.navigate('InitialScreen'), style: 'cancel'}
          ]);
        }
      }}
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    login
  };
};

export default UseLoginScreen;
