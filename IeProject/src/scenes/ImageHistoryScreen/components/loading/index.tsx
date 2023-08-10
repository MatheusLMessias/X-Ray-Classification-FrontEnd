import React from 'react';
import {View, Text, TouchableOpacity, Modal, ActivityIndicator} from 'react-native';
import styles from './styles';

interface ButtonComponentProps {
  visible: boolean;
}

const LoadingComponent = (props: ButtonComponentProps) => {
  return (
    <Modal transparent={true} visible={props.visible} animationType="slide">
      <View style={styles.modal}>
      <ActivityIndicator 
      size="large"
      color={"black"}
      animating={true}
      />
      </View>
    </Modal>

  );
};

export default LoadingComponent;
