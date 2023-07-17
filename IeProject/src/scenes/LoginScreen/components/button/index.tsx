import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface ButtonComponentProps {
    text: string;
    route: any;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <View style={styles.buttonComponent}>
        <TouchableOpacity
          style={styles.Button}
          onPress={props.route}
        >
          <Text style={styles.buttonComponentText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default ButtonComponent;