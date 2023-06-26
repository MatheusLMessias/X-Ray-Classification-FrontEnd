import React from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import styles from '../styles';

interface TextComponentProps {
  text: string;
}

const TextComponent = (props: TextComponentProps) => {
  return( 
    <View style={styles.viewTextInitial}>
        <Text style={styles.textInitial}>{props.text}</Text>
    </View>
  );
};

export default TextComponent;
