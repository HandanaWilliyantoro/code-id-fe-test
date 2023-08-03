import React from 'react';
import { useFonts } from 'expo-font'

// Provider
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/store/reducers';
import { composeWithDevTools } from "redux-devtools-extension";
import { PaperProvider } from 'react-native-paper';

// Routes
import Routers from "./src/routers"

// GUI

export default function App() {
  const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

  return (
    <Provider store={store}>
      <PaperProvider>
        <Routers />
      </PaperProvider>
    </Provider>
  );
}