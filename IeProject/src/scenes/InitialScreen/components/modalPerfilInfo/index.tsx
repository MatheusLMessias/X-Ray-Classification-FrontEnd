import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import PerfilInfoData from '../perfilInfoData';
import {TITULO_PERFIL_INFO} from '../../../../resources/values/strings';
import ButtonComponent from '../button';

interface ModalProps {
  handleLogout: () => void;
  openClosed: boolean;
  dismiss: any;
  data: Object;
  text?: String;
  onPress: any;
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
                onPress={props.onPress}>
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
            <View>
              <ButtonComponent
                text={'Sair da Conta'}
                onPress={props.handleLogout}
                color="#F44336"
                width={125}
                height={40}
                borderColor="#F44336"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentPerfilInfo;
