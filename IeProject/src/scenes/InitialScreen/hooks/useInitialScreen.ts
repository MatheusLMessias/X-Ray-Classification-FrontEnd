import {useState} from 'react';
import {infoPerfil} from '../../../resources/mocks/infoPerfilMocks';
import {Alert} from 'react-native';

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
