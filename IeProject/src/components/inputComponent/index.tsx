import React from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const InputComponent = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.label}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        autoFocus={true}
        keyboardType={props.type}
        secureTextEntry={props.secure}
        value={props.data}
        onChangeText={data => props.setData(data)}
      />
    </View>
  );
};

export default InputComponent;