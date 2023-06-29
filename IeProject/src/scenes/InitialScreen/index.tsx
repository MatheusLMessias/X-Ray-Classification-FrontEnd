import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import MainButton from '../../components/buttons';
import styles from './styles';
import HeaderInitialScreen from '../../components/header';
import TextComponent from './components/textComponent';
import {TEXTO_BOAS_VINDAS_TELA_INICIAL} from '../../resources/values/strings';
import UseInitialScreen from './hooks/useInitialScreen';

interface InitialScreenProps {
  navigation: any;
}

// TODO - alert para loggout
// route={() => Alert.alert("Atenção", "Você deseja realmente sair?" , [
//   {text: "Sim", onPress: () => navigation.navigate("Login")},
// ]
// )}

const InitialScreen = ({navigation}: InitialScreenProps) => {
  const {initial} = UseInitialScreen();

  return (
    <View>
      <HeaderInitialScreen
        initialScreen={initial}
        route={() => Alert.alert('Card de menu principal')}
        name={'Olá, fulano'}
      />
      <View>
        <TextComponent text={TEXTO_BOAS_VINDAS_TELA_INICIAL} />
      </View>
      <View style={styles.containerButton}>
        <MainButton
          route={() => Alert.alert('Tela de Tirar Foto')}
          //route={() => navigation.navigate("")}
          text="Tirar Foto"
        />
        <MainButton
          route={() => Alert.alert('Tela de Inserir Foto')}
          //route={() => navigation.navigate("")}
          text="Inserir Foto"
        />
        <MainButton
          route={() => navigation.navigate('ImageHistoryScreen')}
          text="Histórico de Imagens"
        />
      </View>
    </View>
  );
};

export default InitialScreen;
