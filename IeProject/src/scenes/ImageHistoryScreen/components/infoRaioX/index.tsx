import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface ButtonComponentProps {
 name: string;
}

const InfoRaioXComponent = (props: ButtonComponentProps) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default InfoRaioXComponent;
