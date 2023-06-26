import React from "react";
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

interface HeaderInitialScreenProps {
    function: any;
    name: string;
}

const HeaderInitialScreen = (props: HeaderInitialScreenProps) => {

  return (
    <View>
      <StatusBar 
        backgroundColor="#CEEBF7"
        barStyle="default"
      />
      <View style={styles.header}>
      <Text style={styles.headerText}>{props.name}</Text>
      <View style={styles.viewButton}> 
        <TouchableOpacity
          style={styles.buttonHeader}
          onPress={props.function}
        >
          <Image
            style={styles.image}
            source={require("../../img/user.png")}
            tintColor="#688591"
          />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderInitialScreen;