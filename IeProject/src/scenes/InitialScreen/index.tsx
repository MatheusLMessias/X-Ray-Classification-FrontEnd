import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import MainButton from '../../components/buttons';
import styles from './styles';
import HeaderInitialScreen from '../../components/headers';

interface InitialScreenProps {
  navigation: any
}

const InitialScreen = ({navigation}: InitialScreenProps) => {
    return (
      <View>
        <HeaderInitialScreen 
        function={() => Alert.alert("Card de menu principal")}
        name={"Olá, fulano"}
      />
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
