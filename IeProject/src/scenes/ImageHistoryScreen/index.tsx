import {Button, FlatList, Image, Text, View} from 'react-native';
import {HEADER_TELA_HISTORICO_IMAGENS} from '../../resources/values/strings';
import Header from '../../components/header';
import ModalComponent from '../../components/modal';
import useImageHistoryScreen from './hooks/useImageHistoryScreen';
import React from 'react';
import InfoRaioXComponent from './components/infoRaioX';
import LoadingComponent from './components/loading';

interface ImageHistoryScreenProps {
  navigation: any;
}

const ImageHistoryScreen = ({navigation}: ImageHistoryScreenProps) => {
  const {
    data,
    openClosed,
    base64Icon,
    text,
    userInfoFinal,
    loading,
    setClose,
    modalFuction,
  } = useImageHistoryScreen(navigation);

  return (
    <View>
      <Header
        route={() => {
          setClose(true);
          navigation.navigate('InitialScreen');
        }}
        name={HEADER_TELA_HISTORICO_IMAGENS}
      />
      {loading == true ? (
        <LoadingComponent visible={loading} />
      ) : (
        <FlatList
          data={userInfoFinal}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.user_id}
        />
      )}

      {/* 
      <ModalComponent
        openClosed={openClosed}
        dismiss={() => navigation.navigate('InitialScreen')}
        route={() => modalFuction(false)}
        data={data}
        text={text}
      /> */}
    </View>
  );
};

export default ImageHistoryScreen;
