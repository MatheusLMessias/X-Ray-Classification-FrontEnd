import {useEffect, useState} from 'react';
import {
  imagensDescription,
  imagensInfos,
} from '../../../resources/mocks/imagesMocks';
import { useRoute } from '@react-navigation/native';
import HistoryImage from '../../../models/HistoryImage';
import { imageService } from '../../../services';

const useImageHistoryScreen = () => {
  const [data, useData] = useState(imagensInfos);
  const [openClosed, setOpenClosed] = useState<boolean>(false);
  const [text, setText] = useState<String>(imagensDescription.texto);
  const [userInfo, setUserInfo] = useState<any>(useRoute().params);

  useEffect(() => {
    historyImage()
  });

  const historyImage = async () => {
    try {
      const response: HistoryImage = await imageService.historyImage({
        user_id: userInfo.userInfo.response.user.user_id,
      });
      console.log(response)
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

  return {
    data,
    openClosed,
    text,
    modalFuction,
  };
};
export default useImageHistoryScreen;
