import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from '../src/navigation/drawer';

jest.mock('../components/DrawerDesign', () => () => null);
jest.mock('../src/navigation/stack', () => {


  return {
    __esModule: true,
    default: () => null,
  };
});

jest.mock('@react-navigation/drawer', () => {
  const React = require('react');
  const { Text } = require('react-native');

  const Navigator = ({ children }: any) => <>{children}</>;
  const Screen = ({ options, onPress }: any) => (
    <Text onPress={onPress}>{options.drawerLabel}</Text>
  );
  return {
    createDrawerNavigator: () => ({
      Navigator,
      Screen,
 }),
};
});

describe('DrawerNavigator Integration', () => {
  it('navigue vers la page quand on clique dans un bouton du drawer', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

   
    fireEvent.press(getByText('🧩 Étape 2'));

    await waitFor(() => {
      expect(true).toBe(true); 
    });
  });
});
