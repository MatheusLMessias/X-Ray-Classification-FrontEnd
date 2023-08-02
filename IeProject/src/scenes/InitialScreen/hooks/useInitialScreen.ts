import {useState} from 'react';
import {infoPerfil} from '../../../resources/mocks/infoPerfilMocks';
import {Alert} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';

const useInitialScreen = (navigation: any) => {
  const [data, useData] = useState(infoPerfil);
  const [initial, setInitial] = useState<boolean>(true);
  const [openClosedPerfilinfo, setOpenClosedPerfilinfo] =
    useState<boolean>(false);
  const [openClosedInsertImageInfo, setOpenClosedInsertImageInfo] =
    useState<boolean>(false);

  const [raioxName, setRaioxName] = useState<String>('');
  const [date, setDate] = useState<String>('');
  const [patient, setPatient] = useState<String>('');
  const [age, setAge] = useState<String>('');
  const [imageBase64, setImageBase64] = useState<any>();

  const imageInsert = async () => {
    try {
      const image = await DocumentPicker.pick();
      RNFetchBlob.fs
        .readFile(image[0].uri, 'base64')
        .then(data => {
          setImageBase64(data);
          //console.log('Aqui ' + data); //teste
        })
        .catch(err => {
          Alert.alert('Error ao inserir imagem');
        });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        Alert.alert('É obrigatório a seleção de uma imagem, tente novamente');
      }
    }
    console.log('testeeee  '+imageBase64)
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
    setInitial,
    initial,
    openClosedPerfilinfo,
    openClosedInsertImageInfo,
    modalFuctionInsertImageInfo,
    modalFuctionPerfilInfo,
    handleLogout,
    imageInsert,
    raioxName,
    date,
    patient,
    age,
    setRaioxName,
    setDate,
    setPatient,
    setAge,
  };
};

export default useInitialScreen;
