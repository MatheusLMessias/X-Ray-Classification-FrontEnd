import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import ImageInfoList from '../imageInfoList';

interface ModalProps {}

const ModalComponent = (props: any) => {
  console.log(props.data);
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
                  source={require('../../../../img/previous.png')}
                  tintColor="#688591"
                />
              </TouchableOpacity>
              <Text style={styles.headerText} numberOfLines={1}>
                Informações do Raio-X
              </Text>
            </View>
            <ImageInfoList data={props.data} />
            <Text style={styles.titleList} numberOfLines={1}>
              Diagnóstico
            </Text>
            <Text style={styles.textList}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
