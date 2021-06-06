import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen name="WelcomeScreen" 
        component={Welcome}
        // options={{
        //   headerShown:false,  //options kullanımı önemli.dökümandan detaylı incele!
        // }}
        />
        <Stack.Screen 
        name="MemberSignScreen"
        component={MemberSign}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
