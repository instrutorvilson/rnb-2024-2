import { View, Image, ScrollView } from 'react-native';
import ListaContatos from './src/listaContatos';
import styles from './src/estilos';
import Toast from 'react-native-toast-message';
import CadContato from './src/cadContatos';

export default function App() {
  return (
    <ScrollView>
       <CadContato />
       <ListaContatos />

       <Toast 
          position='bottom'
          topOffset={100}
          visibilityTime={1000}
       />
    </ScrollView>
  );
}


