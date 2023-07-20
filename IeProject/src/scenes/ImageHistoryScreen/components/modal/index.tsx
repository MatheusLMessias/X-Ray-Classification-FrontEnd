import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import ImageInfoList from '../imageInfoList';
import {
  TITULO_DIAGNOSTICO,
  TITULO_MODAL,
} from '../../../../resources/values/strings';

interface ModalProps {
  openClosed: boolean;
  dismiss: any;
  route: any;
  data: Object;
  text: String;
}

const ModalComponent = (props: ModalProps) => {
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
                {TITULO_MODAL}
              </Text>
            </View>
            <ImageInfoList data={props.data} />
            <Text style={styles.titleList} numberOfLines={1}>
              {TITULO_DIAGNOSTICO}
            </Text>
            <Text style={styles.textList}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
