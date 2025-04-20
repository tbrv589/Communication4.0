import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PageEcole from './screens/PageEcole';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>


        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }}/>



        <Stack.Screen 
          name="PageEcole"
          component={PageEcole}
          options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
