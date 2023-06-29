import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import styles from './styles';

const ImageInfoList = (props: any) => {
  return (
    <View style={styles.containerList}>
      <Text>{`Apelido Raio-X: ${props.data.nomeRaioX}`}</Text>
      <Text>{`Data: ${props.data.data}`}</Text>
      <Text>{`Paciente: ${props.data.paciente}`}</Text>
      <Text>{`Idade: ${props.data.idade}`}</Text>
    </View>
  );
};

export default ImageInfoList;
