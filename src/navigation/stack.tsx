import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import PageEcole from '../../screens/PageEcole';
import PageEtape1 from '../../screens/PageEtape1';
import PageEtape2 from '../../screens/PageEtape2';
import PageEtape3 from '../../screens/PageEtape3';
import PageCampus from '../../screens/PageCampus';
import PagePlanInscrip from '../../screens/PagePlanInscrip';

// ----- ECOLES -----
import UIMM from '../../screens/Ecole/UIMM';
import EPSI from '../../screens/Ecole/EPSI';
import IET from '../../screens/Ecole/IET';
import ITII from '../../screens/Ecole/ITII';
import IFAG from '../../screens/Ecole/IFAG';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PageEcole" component={PageEcole} />
      <Stack.Screen name="PageEtape1" component={PageEtape1} />
      <Stack.Screen name="PageEtape2" component={PageEtape2} />
      <Stack.Screen name="PageEtape3" component={PageEtape3} />
      <Stack.Screen name="PageCampus" component={PageCampus} />
      <Stack.Screen name="PagePlanInscrip" component={PagePlanInscrip} />
      <Stack.Screen name="UIMM" component={UIMM} />
      <Stack.Screen name="EPSI" component={EPSI} />
      <Stack.Screen name="IET" component={IET} />
      <Stack.Screen name="ITII" component={ITII} />
      <Stack.Screen name="IFAG" component={IFAG} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
