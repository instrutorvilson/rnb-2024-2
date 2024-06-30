import { View } from 'react-native';
import ListaFrutas from './src/listaFrutas';
import styles from './src/estilos';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={styles.container}>
       <ListaFrutas />
       <Toast 
          position='top'
          topOffset={100}
          visibilityTime={1000}
       />
    </View>
  );
}


