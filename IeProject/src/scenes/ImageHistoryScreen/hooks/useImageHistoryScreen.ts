import {useState} from 'react';
import {
  imagensDescription,
  imagensInfos,
} from '../../../resources/mocks/imagesMocks';
import ImageServiceV1 from '../../../services/ImageService/ImageServiceV1';
import {imageService} from '../../../services';
import ImageClassification from '../../../models/ImageClassification';
import RNFetchBlob from 'fetch-blob';

const useImageHistoryScreen = () => {
  const [data, useData] = useState(imagensInfos);
  const [openClosed, setOpenClosed] = useState<boolean>(false);
  const [text, setText] = useState<String>(imagensDescription.texto);

  const modalFuction = async (data: boolean) => {
    if (data == true) {
      setOpenClosed(true);
    } else {
      setOpenClosed(false);
    }
  };

  return {
    data,
    openClosed,
    text,
    modalFuction,
  };
};
export default useImageHistoryScreen;
