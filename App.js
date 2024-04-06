import { View } from 'react-native';
import Toast from 'react-native-toast-message';
import NomeCompleto from './src/componentes/nomeCompleto';
import styles from './src/estilos/estilos';
import Cadastro from './src/componentes/cadastro';
export default function App() { 
  return (
    <View style={styles.container}>
      { /*<NomeCompleto /> */}
       
       <Cadastro />

      <Toast />
    </View>
  );
}

