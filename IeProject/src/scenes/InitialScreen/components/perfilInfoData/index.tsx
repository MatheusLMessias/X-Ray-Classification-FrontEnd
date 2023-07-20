import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {
  NOME_PERFIL_INFO,
  EMAIL_PERFIL_INFO,
} from '../../../../resources/values/strings';

interface PerfilInfoDataProps {
  data: any;
}

const PerfilInfoData = (props: PerfilInfoDataProps) => {
  return (
    <View style={styles.containerList}>
      <Text>{`${NOME_PERFIL_INFO} ${props.data.name}`}</Text>
      <Text>{`${EMAIL_PERFIL_INFO} ${props.data.email}`}</Text>
    </View>
  );
};

export default PerfilInfoData;
