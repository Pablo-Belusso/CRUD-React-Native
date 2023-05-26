import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 20
    },
    buttonNewTask:{
      backgroundColor:"#F92e6a",
      position: "absolute",
      width: 60,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      bottom: 30,
      left: 20,
      borderRadius: 50

    },
    iconButton:{
      color: 'white',
      fontSize: 25,
      fontWeight: "bold"
    }
  });

  export default estilo