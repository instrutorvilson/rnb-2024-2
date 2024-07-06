import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    fontSize: 20,
    backgroundColor: '#e7eff6',
    borderRadius: 5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    width: 350,
    marginHorizontal:5 
  },
  titulo: {
    fontSize: 28,
    marginBottom: 30
  },
  botao: {
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
  },
  rotulo: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10
  },
  foto: {
    width: 100,
    height: 100,
    margin: 20
  },
  fotoCard: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50
  },
  containerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    marginVertical: 3,
    paddingRight: 10
  },
  labelCard: {
    fontSize: 18,
    fontWeight: 500
  },
  dadosLabel: {
    fontWeight: 200,
    marginStart: 5
  }
});

export default styles