import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import StackNavigator from './stack.router';

const Router = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;