import React from "react";
import { View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

interface HeaderInitialScreenProps {
  initialScreen?: boolean
  route: any;
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
        {props.initialScreen ? (
          <>
          <Text style={styles.headerText}>{props.name}</Text>
          <View style={styles.viewButton}>
            <TouchableOpacity
              style={styles.buttonHeader}
              onPress={props.route}
            >
              <Image
                style={styles.image}
                source={require("../../img/user.png")}
                tintColor="#688591" />
            </TouchableOpacity>
          </View>
          </>
        ) : (
          <>
            <View style={styles.viewButtonHistory}>
              <TouchableOpacity
                style={styles.buttonHeaderHistory}
                onPress={props.route}
              >
                <Image
                  style={styles.imageHistory}
                  source={require("../../img/previous.png")}
                  tintColor="#688591" />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTextHistory} numberOfLines={2}>{props.name}</Text>
          </>
        )}
      
      </View>
    </View>
  );
};

export default HeaderInitialScreen;