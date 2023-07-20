import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {
  DATA_LIST,
  IDADE_LIST,
  PACIENTE_LIST,
  RAIOX_LIST,
} from '../../../../resources/values/strings';

interface ImageInfoListProps {
  data: any;
}

const ImageInfoList = (props: ImageInfoListProps) => {
  return (
    <View style={styles.containerList}>
      <Text>{`${RAIOX_LIST} ${props.data.nomeRaioX}`}</Text>
      <Text>{`${DATA_LIST} ${props.data.data}`}</Text>
      <Text>{`${PACIENTE_LIST} ${props.data.paciente}`}</Text>
      <Text>{`${IDADE_LIST} ${props.data.idade}`}</Text>
    </View>
  );
};

export default ImageInfoList;
