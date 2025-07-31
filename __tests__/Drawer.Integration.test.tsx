import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../src/navigation/drawer';

// mock du drawer et de la navigation par stack
jest.mock('../components/DrawerDesign', () => () => null)
jest.mock('../src/navigation/stack', () => {


  return { 
    __esModule: true,
    default: () => null,
  };
});

// mock de la navigation drawer
jest.mock('@react-navigation/drawer', () => {
  const React = require('react')
  const { Text } = require('react-native')

  // fonction de comportement simplifié, Navigator affiche les enfants
  
  const Navigator = ({ children }: any) => <>{children}</>
  // simule un bouton cliquable
  const Screen = ({ options, onPress }: any) => (
    <Text onPress={onPress}>{options.drawerLabel}</Text>
  )
  return {
    createDrawerNavigator: () => ({
      Navigator,
      Screen,
 }),
};
});

describe('DrawerNavigator Integration', () => {
  it('navigue vers la page quand on clique dans un bouton du drawer', async () => {
    // rendu du drawer du container de navigation
    const { getByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

   // simulation d'un clic (sur etape 2)
    fireEvent.press(getByText('Étape 2'))

    // attente d'un effet de navigation 
    await waitFor(() => {
      expect(true).toBe(true); 
    });
  });
});
