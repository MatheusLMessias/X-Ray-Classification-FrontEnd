import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import MainButton from '../../components/buttons';
import styles from './styles';

interface InitialScreenProps {
  navigation: any
}

const InitialScreen = ({navigation}: InitialScreenProps) => {
    return (
        <View style={styles.containerButton}>
          <MainButton
            route={() => navigation.navigate("Login")}
            text="Tirar Foto"
          />
          <MainButton
            route={() => navigation.navigate("Login")}
            text="Inserir Foto"
          />
          <MainButton
            route={() => navigation.navigate("Login")}
            text="Histórico de Imagens"
          />
        </View>
      );
}

export default InitialScreen;
