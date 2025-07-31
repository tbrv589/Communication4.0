import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import DrawerDesign from '../../components/DrawerDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Drawer = createDrawerNavigator();

const HomeIcon = ( {color, size, focused } : { color: string, size: number, focused: boolean}) => (
            <FontAwesome name='home' size={focused ? size + 2 : size} color={focused ? 'black' : color } />
          )
         

const DrawerNavigator = () => {
  return ( 
    <Drawer.Navigator
      initialRouteName="MainStack"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerDesign {...props} />}

    >
     
      <Drawer.Screen
        name="MainStack"
        component={StackNavigator}
        options={{ 
          drawerLabel: 'Accueil',
          drawerIcon: (props) => <HomeIcon {...props} />}} 
        initialParams={{ screen: 'HomeScreen' }}
      />

      <Drawer.Screen
        name="Etape1"
        component={StackNavigator}
        options={{
          drawerLabel: ' Étape 1',
        }}
        initialParams={{ screen: 'PageEtape1' }}
      />
      <Drawer.Screen
        name="Etape2"
        component={StackNavigator}
        options={{
          drawerLabel: ' Étape 2',
        }}
        initialParams={{ screen: 'PageEtape2' }}
      />
      <Drawer.Screen
        name="Etape3"
        component={StackNavigator}
        options={{
          drawerLabel: ' Étape 3',
        }}
        initialParams={{ screen: 'PageEtape3' }}
      />
    </Drawer.Navigator>
  );
};


console.log('DrawerNavigator defined:', DrawerNavigator);
export default DrawerNavigator;
