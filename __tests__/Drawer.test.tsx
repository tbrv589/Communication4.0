import React from 'react';
import { render } from '@testing-library/react-native';
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
  return {
    createDrawerNavigator: () => {
      const React = require('react');
      const { Text } = require('react-native');

      const Navigator = ({ children }: any) => <>{children}</>;
      const Screen = ({ options }: any) => <Text>{options.drawerLabel}</Text>;

      return { Navigator, Screen };
    },
  };
});

describe('DrawerNavigator', () => {
  it('rend les éléments du drawer', () => {
    const { getByText } = render(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );

    expect(getByText('🏠 Accueil')).toBeTruthy();
    expect(getByText('🧩 Étape 1')).toBeTruthy();
    expect(getByText('🧩 Étape 2')).toBeTruthy();
    expect(getByText('🧩 Étape 3')).toBeTruthy();
  });
});
