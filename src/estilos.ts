import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      padding: 10,
      fontSize: 20,
      backgroundColor: '#e7eff6',
      borderRadius: 20,
      borderBottomWidth: 1
    },
    titulo:{
      fontSize: 28,
      marginBottom: 30
    },
    botao:{
      marginVertical: 20,
      borderColor: '#4b86b4',
      borderWidth: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  });

  export default styles