import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import InsertImageInfo from '../insertImageInfo';
import { TITULO_INSERT_IMAGE_INFO } from '../../../../resources/values/strings';

interface ModalInsertImageInfoProps {
  openClosed: boolean;
  dismiss: any;
  route: any;
  data: Object;
  text: String;
}

const ModalComponentInsertImageInfo = (props: ModalInsertImageInfoProps) => {
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
                {TITULO_INSERT_IMAGE_INFO}
              </Text>
            </View>
            <InsertImageInfo data={props.data} />
            
            <Text style={styles.textList}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentInsertImageInfo;

// Linha35 <ImageInfoList data={props.data} />