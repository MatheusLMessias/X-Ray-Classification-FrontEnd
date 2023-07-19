import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import InsertImageInfo from '../insertImageInfo';
import { TITULO_INSERT_IMAGE_INFO } from '../../../../resources/values/strings';
import ButtonComponent from '../button';

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
            <ButtonComponent
              text={'Salvar'}
              color='#688591'
              width={100}
              height={40}
              borderColor='#688591' 
              onPress={props.route}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentInsertImageInfo;