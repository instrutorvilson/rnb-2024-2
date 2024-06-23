
import { StyleSheet, 
  Text, 
  TextInput, 
  View,
  Button
} from 'react-native';

import styles from './src/estilos';
import Cadastro from './src/cadastro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
    
    </View>
  );
}

