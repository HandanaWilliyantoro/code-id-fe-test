import React, {Suspense} from 'react';
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'

// Provider
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './src/store/reducers';
import { composeWithDevTools } from "redux-devtools-extension";

// Routes
import Routers from "./src/routers"

// GUI
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)))

  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }
  
  return (
    <TamaguiProvider config={config}>
      <Suspense>
        <Provider store={store}>
          <Routers />
        </Provider>
      </Suspense>
    </TamaguiProvider>
  );
}