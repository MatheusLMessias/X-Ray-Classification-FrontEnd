import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonComponentProps {
  text: string;
  onPress: () => void;
  color: string;
  width: number;
  height: number;
  borderColor: string;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <View style={styles.buttonComponent}>
      <TouchableOpacity
        style={[
          styles.Button,
          {
            backgroundColor: props.color,
            width: props.width,
            height: props.height,
            borderColor: props.borderColor,
          },
        ]}
        onPress={props.onPress}>
        <Text style={styles.buttonComponentText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
