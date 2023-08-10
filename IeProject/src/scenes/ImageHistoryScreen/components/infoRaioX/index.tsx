import React from 'react';
import {View, Text, TouchableOpacity, Alert, ScrollView} from 'react-native';
import styles from './styles';
import ModalComponent from '../../../../components/modal';

interface ButtonComponentProps {
  info: any;
  modalFuction: any;
  openClosed: any;
}

const InfoRaioXComponent = (props: ButtonComponentProps) => {
  return (
    <View style={styles.buttonComponent}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          props.modalFuction(true);
        }}>
        <Text style={styles.buttonComponentText}>{`Nome Raio-X: ${props.info.name}`}</Text>
        <Text style={styles.buttonComponentText}>{`Nome paciente: ${props.info.username}`}</Text>
      </TouchableOpacity>
      <ModalComponent
        openClosed={props.openClosed}
        route={() => props.modalFuction(false)}
        data={props.info}
      />
    </View>
  );
};

export default InfoRaioXComponent;
