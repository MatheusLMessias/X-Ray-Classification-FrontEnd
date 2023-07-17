import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface MainButtonProps {
    text: string;
    route: any;
}

const MainButton = (props: MainButtonProps) => {
  return (
    <View style={styles.mainButton}>
      <TouchableOpacity
        style={styles.Button}
        onPress={props.route}
      >
        <Text style={styles.mainButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainButton;  