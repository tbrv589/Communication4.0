import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import PageEcole from './screens/PageEcole';
import PageEtape1 from './screens/PageEtape1';
import PageEtape2 from './screens/PageEtape2';
import PageEtape3 from './screens/PageEtape3';
import PageCampus from './screens/PageCampus';
import PagePlanInscrip from './screens/PagePlanInscrip';

import UIMM from './screens/Ecole/UIMM';


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


        <Stack.Screen
          name="PageEtape1"
          component={PageEtape1}
          options={{headerShown: false}}
        
        />

        <Stack.Screen 
          name="PageEtape2"
          component={PageEtape2}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="PageEtape3"
          component={PageEtape3}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="PageCampus"
          component={PageCampus}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="PagePlanInscrip"
          component={PagePlanInscrip}
          options={{headerShown: false}}
        />


{/* ----ECOLE------------------------------------------------------- */}


        <Stack.Screen 
          name="UIMM"
          component={UIMM}
          options={{headerShown: false}}
        />
        

        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
