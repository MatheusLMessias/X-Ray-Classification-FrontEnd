import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface ButtonComponentProps {
    text: string;
    onPress?: () => void;
    route?: any;
    color: string;
    width: number;
    height: number;
    borderColor: string;
}

const ButtonComponent = (props: ButtonComponentProps) => {
  const handlePress = () => {
    if (props.onPress) {
      props.onPress();
    }
    if (props.route) {
      props.route();
    }
  };

  return (
    <View style={styles.buttonComponent}>
        <TouchableOpacity
          style={[styles.Button, 
            { 
              backgroundColor: props.color,
              width: props.width,
              height: props.height,
              borderColor: props.borderColor 
            }
          ]}
          onPress={handlePress}
          >
          <Text style={styles.buttonComponentText}>{props.text}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default ButtonComponent;