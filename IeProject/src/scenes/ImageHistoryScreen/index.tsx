import { View} from 'react-native';
import {HEADER_TELA_HISTORICO_IMAGENS} from '../../resources/values/strings';
import Header from '../../components/header';

interface ImageHistoryScreenProps {
  navigation: any;
}

const ImageHistoryScreen = ({navigation}: ImageHistoryScreenProps) => {
  return (
    <View>
      <Header
        route={() => navigation.navigate('InitialScreen')}
        name={HEADER_TELA_HISTORICO_IMAGENS}
      />
    </View>
  );
};

export default ImageHistoryScreen;
