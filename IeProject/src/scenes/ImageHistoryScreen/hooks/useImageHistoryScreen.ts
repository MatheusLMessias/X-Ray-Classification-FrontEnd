import {useEffect, useState} from 'react';
import {
  imagensDescription,
  imagensInfos,
} from '../../../resources/mocks/imagesMocks';
import { useRoute } from '@react-navigation/native';
import HistoryImage from '../../../models/HistoryImage';
import { imageService } from '../../../services';
import { Alert } from 'react-native';

const useImageHistoryScreen = (navigation: any) => {
  const [data, useData] = useState(imagensInfos);
  const [openClosed, setOpenClosed] = useState<boolean>(false);
  const [text, setText] = useState<String>(imagensDescription.texto);
  const [hashImage, setHashImage] = useState<any>([]);
  const [imageBase64, setImageBase64] = useState<any>([{}]);
  const [userInfo, setUserInfo] = useState<any>(useRoute().params);
  const [base64Icon, setBase64Icon] = useState<any>([{}]);
  const [userInfoFinal, setUserInfoFinal] = useState<any>([{}]);
  const [close, setClose] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    userInfoFinal.shift();
    base64Icon.shift();
    historyImageFunction()
  },[]);

  useEffect(() => {
    verifyClose()
  },[close]); 

  const verifyClose = () => {
    if(close == true){
      setHashImage({})
      setImageBase64({})
      setUserInfo({})
      setBase64Icon({})
      setUserInfoFinal({})
    }
  }

  const verifyImage = (response: any) => {
    if(response.length == 0 || response.length == undefined || !response.length || response == null){
      Alert.alert('Nenhuma imagem encontrada', 'Insira novas imagens na tela anterior', [
        {
          text: 'Entendi',
          onPress: () => navigation.navigate('InitialScreen'),
          style: 'destructive',
        },
      ]);
    }
  };

  const verifyInfo = async (loading: any) => {
    setTimeout(() => {
      if (loading == true) {
        setLoading(false);
      }
    }, 1000)
  };

  const historyImageFunction = async () => {
    const response: any = await historyImage()
    verifyImage(response)
    await getHashImage(response)
    const loading: any = await getServiceImage()
    await verifyInfo(loading)
  };

  const getHashImage = async (response: any) => {
    await response.forEach(async (index: any) => {
      await hashImage.push(index.hash)
    })
  }; 

  const getServiceImage = async () => {
    await hashImage.forEach(async (index: any) => {
      const responseImg64: any = await getImage(index)
      await userInfoFinal.push(responseImg64)
      //console.log(userInfoFinal)
    })
    return true
  }; 

  const getImage = async (hash: any) => { 
    try {
      const response: any = await imageService.getImage({
        hash: hash,
      });
      return response
    } catch (error) {
      throw error;
    }
  };

  const historyImage = async () => {
    try {
      const response: HistoryImage = await imageService.historyImage({
        user_id: userInfo.userInfo.response.user.user_id,
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

  return {
    base64Icon,
    imageBase64,
    data,
    openClosed,
    text,
    userInfoFinal,
    loading,
    setClose,
    modalFuction,
  };
};
export default useImageHistoryScreen;
