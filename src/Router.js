import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native';

import Welcome from './pages/Welcome';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
