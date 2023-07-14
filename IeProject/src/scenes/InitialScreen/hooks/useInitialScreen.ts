import {useState} from 'react';
import {
  imagensDescription,
  imagensInfos,
} from '../../../resources/mocks/imagesMocks';

const useInitialScreen = () => {
  const [data, useData] = useState(imagensInfos);
  const [initial, setInitial] = useState<boolean>(true);
  const [openClosedPerfilinfo, setOpenClosedPerfilinfo] = useState<boolean>(false);
  const [openClosedInsertImageInfo, setOpenClosedInsertImageInfo] = useState<boolean>(false);

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
  };
};

export default useInitialScreen;
