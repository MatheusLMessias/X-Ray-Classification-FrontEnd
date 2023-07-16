import {Button, View} from 'react-native';
import {HEADER_TELA_HISTORICO_IMAGENS} from '../../resources/values/strings';
import Header from '../../components/header';
import ModalComponent from './components/modal';
import useImageHistoryScreen from './hooks/useImageHistoryScreen';

interface ImageHistoryScreenProps {
  navigation: any;
}

const ImageHistoryScreen = ({navigation}: ImageHistoryScreenProps) => {
  const {data, openClosed, text, modalFuction} = useImageHistoryScreen();
  return (
    <View>
      <Header
        route={() => navigation.navigate('InitialScreen')}
        name={HEADER_TELA_HISTORICO_IMAGENS}
      />
      <Button title="Teste Card antes das Imagens" onPress={() => modalFuction(true)} />
      <ModalComponent
        openClosed={openClosed}
        dismiss={() => navigation.navigate('InitialScreen')}
        route={() => modalFuction(false)}
        data={data}
        text={text}
      />
    </View>
  );
};

export default ImageHistoryScreen;
