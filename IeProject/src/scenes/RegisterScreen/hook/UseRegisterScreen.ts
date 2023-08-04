import {useEffect, useState} from 'react';
import { Alert } from 'react-native';

const UseRegisterScreen = () => {
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

  const register = () => {
    const verify = verifyValues();
    if(verify == true){
      Alert.alert("Teste")
    } else {

    }
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
