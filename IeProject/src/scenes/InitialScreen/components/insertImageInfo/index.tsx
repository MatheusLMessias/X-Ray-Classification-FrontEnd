import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import styles from './styles';
import { RAIOX_INSERT_IMAGE_INFO, DATA_INSERT_IMAGE_INFO, PACIENTE_INSERT_IMAGE_INFO, IDADE_INSERT_IMAGE_INFO } from '../../../../resources/values/strings';

interface InsertImageInfoProps {
  data: any
}

const InsertImageInfo = (props: InsertImageInfoProps) => {
  return (
    <View style={styles.containerList}>
      <Text>{RAIOX_INSERT_IMAGE_INFO} </Text>
      <Text>{DATA_INSERT_IMAGE_INFO} </Text>
      <Text>{PACIENTE_INSERT_IMAGE_INFO} </Text>
      <Text>{IDADE_INSERT_IMAGE_INFO} </Text> 
      
      {/* <Text>{`${RAIOX_INSERT_IMAGE_INFO} ${props.data.nomeRaioX}`}</Text>
      <Text>{`${DATA_INSERT_IMAGE_INFO} ${props.data.data}`}</Text>
      <Text>{`${PACIENTE_INSERT_IMAGE_INFO} ${props.data.paciente}`}</Text>
      <Text>{`${IDADE_INSERT_IMAGE_INFO} ${props.data.idade}`}</Text> */}
    </View>
  );
};

export default InsertImageInfo;
