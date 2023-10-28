import {useEffect, useState} from 'react';
import { Alert } from 'react-native';
import { userService } from '../../../services';
import Register from '../../../models/Register';

const UseRegisterScreen = (navigation: any) => {
  const [name, setName] = useState<String>('');
  const [newEmail, setNewEmail] = useState<String>('');
  const [newPassword, setNewPassword] = useState<String>('');
  const [insertInfos, setInsertInfos] = useState<any>({});
  let invalidField = {label: "", invalid: false};

  useEffect(() => {
    setInsertInfos({nome: name, email: newEmail, senha: newPassword});
  }, [name, newEmail, newPassword]);

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

  const postUser = async () => {
    try {
      const response: Register = await userService.createUser({
        nome: insertInfos.nome,
        email: insertInfos.email,
        senha: insertInfos.senha
      });
      console.log(response)
      return response
    } catch (error) {
      throw error;
    }
  };

  const register = async () => {
    const verify = verifyValues();
    if(verify == true){
      const response = await postUser();
      if(response){
        if(response.error){
          Alert.alert('Error: ' + response.error)
        } else {
          Alert.alert('Usuário registrado com sucesso', 'Entre com email e senha na tela de login', [
            {text: 'OK', onPress: () => navigation.navigate('LoginScreen'), style: 'cancel'},
          ]);
        }
      }}
  }

  return {
    name,
    newEmail,
    newPassword,
    setName,
    setNewEmail,
    setNewPassword,
    register
  };
};

export default UseRegisterScreen;
