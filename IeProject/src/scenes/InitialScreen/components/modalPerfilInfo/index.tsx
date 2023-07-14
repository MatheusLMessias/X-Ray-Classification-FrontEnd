import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import PerfilInfoData from '../perfilInfoData';
import { TITULO_PERFIL_INFO } from '../../../../resources/values/strings';

interface ModalProps {
  openClosed: boolean;
  dismiss: any;
  route: any;
  data: Object;
  text: String;
}

const ModalComponentPerfilInfo = (props: ModalProps) => {
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.openClosed}
        onDismiss={props.dismiss}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity
                style={styles.buttonHeader}
                onPress={props.route}>
                <Image
                  style={styles.image}
                  source={require('../../../../img/close.png')}
                  tintColor="#688591"
                />
              </TouchableOpacity>
              <Text style={styles.headerText} numberOfLines={1}>
                {TITULO_PERFIL_INFO}
              </Text>
            </View>
            <PerfilInfoData data={props.data} />
            
            <Text style={styles.textList}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentPerfilInfo;

// Linha35 <ImageInfoList data={props.data} />