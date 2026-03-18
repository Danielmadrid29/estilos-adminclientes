
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ClientesSreen from './screens/ClientesScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>

    <ClientesSreen />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
