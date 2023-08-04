import React from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import styles from './styles';
import InsertImageInfo from '../insertImageInfo';
import {TITULO_INSERT_IMAGE_INFO} from '../../../../resources/values/strings';
import ButtonComponent from '../button';

interface ModalInsertImageInfoProps {
  openClosed: boolean;
  dismiss: any;
  route: any;
  data: Object;
  text: String;
  imageInsertFunction: any;
  saveRaioxFunction: any;
  raioxName: String;
  date: String;
  patient: String;
  age: String;
  setRaioxName: any;
  setDate: any;
  setPatient: any;
  setAge: any;
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
            <InsertImageInfo 
                raioxName={props.raioxName}
                date={props.date}
                patient={props.patient}
                age={props.age}
                setRaioxName={props.setRaioxName}
                setDate={props.setDate}
                setPatient={props.setPatient}
                setAge={props.setAge}
             />
            <Text style={styles.textList}>{props.text}</Text>
            <View style={styles.button}>
            <ButtonComponent
              text={'Inserir Raio X'}
              color="#688591"
              width={130}
              height={40}
              borderColor="#688591"
              onPress={props.imageInsertFunction}
            />
            <ButtonComponent
              text={'Salvar e compilar'}
              color="#688591"
              width={130}
              height={40}
              borderColor="#688591"
              onPress={props.saveRaioxFunction}
            />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentInsertImageInfo;
