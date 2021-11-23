import React from 'react';

import { RuletaScreen } from './components/RuletaScreen';

import { store } from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={ store }>
      <RuletaScreen />
    </Provider>
  );
}

export default App;
