import { View } from 'react-native';
import ListaFrutas from './src/listaFrutas';
import styles from './src/estilos';
import Revisao from './src/revisao';

export default function App() {
  return (
    <View style={styles.container}>
       <ListaFrutas />
    </View>
  );
}


