import {useEffect, useState} from 'react';
import {infoPerfil} from '../../../resources/mocks/infoPerfilMocks';
import {Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import ImageClassification from '../../../models/ImageClassification';
import {imageService} from '../../../services';
import { imagensDescription, imagensInfos } from '../../../resources/mocks/imagesMocks';

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
  const [infoPatient, setInfoPatient] = useState(imagensInfos);

  useEffect(() => {
    setInsertInfos({raioxName: raioxName, date: date, patient: patient, age: age});
    console.log(infoPatient)
  }, [raioxName, date, patient, age, infoPatient, imageBase64]);

  const imageInsert = async () => {
    try {
      const image = await DocumentPicker.pick();
      setImageBase64(image);
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
        Alert.alert('É obrigatório a seleção de uma imagem, tente novamente');
      }
    }
  };

  const saveRaiox = () => {
    postInfoRaioX();
    if(infoPatient){
      modalFuctionInsertImageInfo(false)
      Alert.alert('Raio X inserido com sucesso', 'Deseja visualizar o resultado? Você também pode visualizar pela tela de histórico de imagens', [
        {text: 'Não', onPress: () => {}, style: 'cancel'},
        {
          text: 'Visualizar',
          onPress: () => modalFuction(true),
          style: 'destructive',
        },
      ]);
    }else{
      Alert.alert('Erro ao salvar as informações do Raio-X')
    }
  }

  const postInfoRaioX = async () => {
    try {
      console.log('postInfo ' + imageBase64[0].uri + insertInfos.raioxName + insertInfos.date + insertInfos.patient + insertInfos.age)
      const response: ImageClassification = await imageService.getImage({
        //info: setInfoPatient,
        username: imageBase64,
        age: insertInfos.raioxName,
        date: insertInfos.date,
        name: insertInfos.patient,
        image: insertInfos.age,
      });
      return response;
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
