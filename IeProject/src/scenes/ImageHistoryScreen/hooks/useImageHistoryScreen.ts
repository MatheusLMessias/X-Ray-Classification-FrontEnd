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
  const teste = require('../../../resources/mocks/Normal-1001.png');
  const teste2 = '<img src="../../../resources/mocks/Normal-1001.png";">'

  const getInfoImage = async () => {
    console.warn('foi'+teste)
    try {
      const response: ImageClassification = await imageService.getImage({
        image: teste,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const modalFuction = async (data: boolean) => {
    try {
    const response = await getInfoImage()
    console.warn(response)
    if (data == true) {
      setOpenClosed(true);
    } else {
      setOpenClosed(false);
    }

  } catch (error) {
    throw error;
  }
  };

  return {
    data,
    openClosed,
    text,
    teste,
    modalFuction,
  };
};
export default useImageHistoryScreen;
