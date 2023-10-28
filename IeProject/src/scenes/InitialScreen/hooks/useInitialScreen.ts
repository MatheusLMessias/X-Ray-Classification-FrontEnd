import {useEffect, useState} from 'react';
import {infoPerfil} from '../../../resources/mocks/infoPerfilMocks';
import {Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import ImageClassification from '../../../models/ImageClassification';
import {imageService} from '../../../services';
import { useRoute } from '@react-navigation/native';

const useInitialScreen = (navigation: any) => {
  const [data, useData] = useState(infoPerfil);
  const [initial, setInitial] = useState<boolean>(true);
  const [openClosedPerfilinfo, setOpenClosedPerfilinfo] =
    useState<boolean>(false);
  const [openClosedInsertImageInfo, setOpenClosedInsertImageInfo] =
    useState<boolean>(false);
    const [openClosed, setOpenClosed] = useState<boolean>(false);
  const [raioxName, setRaioxName] = useState<String>('');
  const [date, setDate] = useState<String>('');
  const [patient, setPatient] = useState<String>('');
  const [age, setAge] = useState<String>('');
  const [insertInfos, setInsertInfos] = useState<any>({});
  const [imageBase64, setImageBase64] = useState<any>();
  const [infoPatient, setInfoPatient] = useState<ImageClassification>();
  const [userInfo, setUserInfo] = useState<any>(useRoute().params);
  let invalidField = {label: "", invalid: false};

  useEffect(() => {
    setInsertInfos({apelido: raioxName, data: date, paciente: patient, idade: age, imagem: imageBase64});
  }, [raioxName, date, patient, age, imageBase64]);

  useEffect(() => {
    setRaioxName('')
    setDate('')
    setPatient('')
    setAge('')
  }, []);

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

  const imageInsert = async () => {
    try {
      const image = await DocumentPicker.pick();
      RNFetchBlob.fs
        .readFile(image[0].uri, 'base64')
        .then(data => {
          setImageBase64(data);
        })
        .catch(err => {
          Alert.alert('Error ao inserir imagem');
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('É obrigatório a seleção de uma imagem');
      }
    }
  };

  const saveRaiox = async () => {
    const verify = verifyValues();
    if(verify == true){
      const response = await postInfoRaioX();
      console.log(response)
      if(response){
        if(response.error){
          Alert.alert('Error: ' + 'Imagem já classificada anteriormente')
        } else {
          setInfoPatient(response)
          modalFuctionInsertImageInfo(false)
          Alert.alert('Raio X inserido com sucesso', 'Deseja visualizar o resultado? Você também pode visualizar pela tela de Histórico de Imagens', [
            {text: 'Não', onPress: () => {}, style: 'cancel'},
            {
              text: 'Visualizar',
              onPress: () => modalFuction(true),
              style: 'destructive',
            },
          ]);
        }
      } else {
        Alert.alert('Erro ao salvar as informações do Raio-X')
      }
    }
  }

  const postInfoRaioX = async () => {
    try {
      const response: ImageClassification = await imageService.postImage({
        user_id: userInfo.response.user.user_id,
        username: insertInfos.apelido,
        age: insertInfos.idade ,
        date: insertInfos.data,
        name: insertInfos.paciente,
        image: imageBase64,
      });
      return response
    } catch (error) {
      throw error;
    }
  };

  const modalFuction = async (data: boolean) => {
    if (data == true) {
      setOpenClosed(true);
    } else {
      setOpenClosed(false);
    }
  };

  const modalFuctionInsertImageInfo = (data: boolean) => {
    if (data == true) {
      setOpenClosedInsertImageInfo(true);
    } else {
      setOpenClosedInsertImageInfo(false);
    }
  };

  const modalFuctionPerfilInfo = (data: boolean) => {
    if (data == true) {
      setOpenClosedPerfilinfo(true);
    } else {
      setOpenClosedPerfilinfo(false);
    }
  };

  const handleLogout = () => {
    Alert.alert('Sair da Conta', 'Tem certeza que deseja sair da conta?', [
      {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
      {
        text: 'Sair',
        onPress: () => navigation.navigate('LoginScreen'),
        style: 'destructive',
      },
    ]);
  };

  return {
    data,
    initial,
    openClosedPerfilinfo,
    openClosedInsertImageInfo,
    openClosed,
    raioxName,
    infoPatient,
    date,
    patient,
    age,
    userInfo,
    setInitial,
    setOpenClosed,
    modalFuctionInsertImageInfo,
    modalFuctionPerfilInfo,
    handleLogout,
    imageInsert,
    modalFuction,
    setRaioxName,
    setDate,
    saveRaiox,
    setPatient,
    setAge,
  };
};

export default useInitialScreen;
