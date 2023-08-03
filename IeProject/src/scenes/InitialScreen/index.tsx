import React from 'react';
import {Alert, View} from 'react-native';
import MainButton from '../../components/buttons';
import styles from './styles';
import HeaderInitialScreen from '../../components/header';
import TextComponent from './components/textComponent';
import {TEXTO_BOAS_VINDAS_TELA_INICIAL} from '../../resources/values/strings';
import UseInitialScreen from './hooks/useInitialScreen';

import ModalComponentInsertImageInfo from './components/modalInsertImageInfo';

import ModalComponentPerfilInfo from './components/modalPerfilInfo';
import ModalComponent from '../../components/modal';

interface InitialScreenProps {
  navigation: any;
}

const InitialScreen = ({navigation}: InitialScreenProps) => {
  const {
    data,
    initial,
    openClosedInsertImageInfo,
    openClosedPerfilinfo,
    raioxName,
    date,
    infoPatient,
    patient,
    openClosed,
    age,
    setRaioxName,
    setDate,
    modalFuction,
    setPatient,
    setAge,
    modalFuctionInsertImageInfo,
    modalFuctionPerfilInfo,
    handleLogout,
    imageInsert,
    saveRaiox
  } = UseInitialScreen(navigation);

  return (
    <View>
      <HeaderInitialScreen
        initialScreen={initial}
        route={() => modalFuctionPerfilInfo(true)}
        name={'Olá, fulano'}
      />
      <View>
        <TextComponent text={TEXTO_BOAS_VINDAS_TELA_INICIAL} />
      </View>
      <View style={styles.containerButton}>
        <MainButton
          route={() => modalFuctionInsertImageInfo(true)}
          text="Inserir Foto"
        />
        <MainButton
          route={() => navigation.navigate('ImageHistoryScreen')}
          text="Histórico de Imagens"
        />
      </View>

      <ModalComponentPerfilInfo
        openClosed={openClosedPerfilinfo}
        dismiss={() => navigation.navigate('InitialScreen')}
        onPress={() => modalFuctionPerfilInfo(false)}
        handleLogout={handleLogout}
        data={data}
        text={''}
      />

      <ModalComponentInsertImageInfo
        openClosed={openClosedInsertImageInfo}
        dismiss={() => navigation.navigate('InitialScreen')}
        route={() => modalFuctionInsertImageInfo(false)}
        imageInsertFunction={imageInsert}
        saveRaioxFunction={saveRaiox}
        data={data}
        text={''}
        raioxName={raioxName}
        date={date}
        patient={patient}
        age={age}
        setRaioxName={setRaioxName}
        setDate={setDate}
        setPatient={setPatient}
        setAge={setAge}
      />

      <ModalComponent
        openClosed={openClosed}
        dismiss={() => navigation.navigate('InitialScreen')}
        route={() => modalFuction(false)}
        data={infoPatient}
        text={infoPatient.texto}
      />
    </View>
  );
};

export default InitialScreen;
