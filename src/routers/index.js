import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import StackNavigator from './stack.router';

// Components
import {
  Header
} from "../components"

const Router = () => {
  return (
    <NavigationContainer>
        <Header />
        <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;