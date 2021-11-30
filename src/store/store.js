import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { authReducer } from '../reducers/authReducer';
import { ruletaReducer } from '../reducers/ruletaReducer';

const reducers = combineReducers({
  auth: authReducer,
  ruleta: ruletaReducer
})

export const store = createStore(
  reducers,
  composeWithDevTools()
);
