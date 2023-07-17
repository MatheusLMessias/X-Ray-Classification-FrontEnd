import React from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Alert } from 'react-native';
import styles from './styles';
import PerfilInfoData from '../perfilInfoData';
import { TITULO_PERFIL_INFO } from '../../../../resources/values/strings';
import ButtonComponent from '../button';
import { useNavigation } from '@react-navigation/native';

interface ModalProps {
  openClosed: boolean;
  dismiss: any;
  route: any;
  data: Object;
  text: String;
}

const ModalComponentPerfilInfo = (props: ModalProps) => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      'Sair da Conta',
      'Tem certeza que deseja sair da conta?',
      [
        { text: 'Cancelar', onPress: () => {}, style: 'cancel' },
        {
          text: 'Sair',
          onPress: () => navigation.navigate('LoginScreen'),
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.openClosed}
        onDismiss={props.dismiss}
      >
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.buttonHeader} onPress={props.route}>
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
                onPress={handleLogout}
                color="#F44336"
                width={125}
                height={40}
                borderColor="#F44336"
              />
            </View>
            <Text style={styles.textList}>{props.text}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponentPerfilInfo;
