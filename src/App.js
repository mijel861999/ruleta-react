import { RuletaScreen } from './components/RuletaScreen';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <RuletaScreen />
    </ChakraProvider>
  );
}

export default App;
