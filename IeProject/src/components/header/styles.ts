import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    image: {
      height: 70,
      width: 70
    },
  
    buttonHeader: {
      width: 70,
      height: 70,
    },

    viewButton: {
      marginEnd: 30
    },
  
    header: {
      justifyContent:"space-between",
      height: 125,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#CEEBF7",
    },
  
    headerText: {
      marginLeft: 50,
      fontSize: 32,
      fontWeight: "bold",
      color: "#688591"
    },

    imageHistory: {
      height: 50,
      width: 50
    },
  
    buttonHeaderHistory: {
      width: 50,
      height: 50,
    },

    viewButtonHistory: {
      marginStart: 30
    },
  
    headerHistory: {
      justifyContent:"space-between",
      height: 125,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#CEEBF7",
    },
  
    headerTextHistory: {
      marginLeft: 60,
      marginEnd: 90,
      fontSize: 32,
      fontWeight: "bold",
      color: "#688591"
    },
  })

  export default styles;