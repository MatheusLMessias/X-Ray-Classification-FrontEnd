import {useState} from 'react';
import {
  infoPerfil
} from '../../../resources/mocks/infoPerfilMocks';

const useInitialScreen = () => {
  const [data, useData] = useState(infoPerfil);
  const [initial, setInitial] = useState<boolean>(true);
  const [openClosedPerfilinfo, setOpenClosedPerfilinfo] = useState<boolean>(false);
  const [openClosedInsertImageInfo, setOpenClosedInsertImageInfo] = useState<boolean>(false);

  const [raioxName, setRaioxName] = useState<String>("");
  const [date, setDate] = useState<String>("");
  const [patient, setPatient] = useState<String>("");
  const [age, setAge] = useState<String>("");

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

  return {
    data,
    setInitial,
    initial,
    openClosedPerfilinfo,
    openClosedInsertImageInfo,
    modalFuctionInsertImageInfo,
    modalFuctionPerfilInfo,

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
