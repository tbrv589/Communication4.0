import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../src/navigation/drawer';

// mcok du composant personnalisé du drawer
jest.mock('../components/DrawerDesign', () => () => null)

// mock du stack navigator
jest.mock('../src/navigation/stack', () => {
  return {
    __esModule: true,
    default: () => null,
  };
});
// mock du drawer navigator
jest.mock('@react-navigation/drawer', () => {
  return {
    createDrawerNavigator: () => {
      const React = require('react')
      const { Text } = require('react-native')

      const Navigator = ({ children }: any) => <>{children}</>
      const Screen = ({ name, options }: any) => (
        <Text>{options?.drawerLabel || name}</Text>
      );

      return {
        Navigator,
        Screen,
      };  }, }})
describe('DrawerNavigator', () => {
  it('rend les éléments du drawer', () => {
    const { getByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    )

    // vérifie les éléments du drawer
    expect(getByText('Accueil')).toBeTruthy()
    expect(getByText(/étape 1/i)).toBeTruthy()
    expect(getByText(/étape 2/i)).toBeTruthy()
    expect(getByText(/étape 3/i)).toBeTruthy()
  })
})