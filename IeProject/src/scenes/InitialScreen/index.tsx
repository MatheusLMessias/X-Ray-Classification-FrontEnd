import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import MainButton from '../../components/buttons';
import styles from './styles';
import HeaderInitialScreen from '../../components/headers';
import TextComponent from './components/textComponent';
import { TEXTO_BOAS_VINDAS_TELA_INICIAL } from '../../resources/values/strings';

interface InitialScreenProps {
  navigation: any
}

const InitialScreen = ({navigation}: InitialScreenProps) => {
    return (
      <View>
        <HeaderInitialScreen 
        route={() => Alert.alert("Card de menu principal")}
        //route={() => navigation.navigate("")}
        name={"Olá, fulano"}
      />
      <View>
        <TextComponent
        text={TEXTO_BOAS_VINDAS_TELA_INICIAL}
        />
      </View>
        <View style={styles.containerButton}>
          <MainButton
            route={() => Alert.alert("Tela de Tirar Foto")}
            //route={() => navigation.navigate("")}
            text="Tirar Foto"
          />
          <MainButton
            route={() => Alert.alert("Tela de Inserir Foto")}
            //route={() => navigation.navigate("")}
            text="Inserir Foto"
          />
          <MainButton
            route={() => Alert.alert("Tela de Histórico de Imagens")}
            //route={() => navigation.navigate("")}
            text="Histórico de Imagens"
          />
        </View>
        </View>
      );
}

export default InitialScreen;
