// mock partiel pour intercepter useNavigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn()
  })
}))

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomBar from '../components/LowBarre';
 
describe('BottomBar', () => {
  // mock pour observer les appels a navigation.navigate
  const mockNavigate = jest.fn()

  beforeEach(() => {
    // remplace dynamiquement useNavigation avec le mock perso
    require('@react-navigation/native').useNavigation = () => ({
      navigate: mockNavigate,
    });
    mockNavigate.mockClear()
  });

  it('affiche le bon nombre de boutons', () => {
    const { queryAllByTestId } = render(<BottomBar />)
    const buttons = queryAllByTestId(/button-/)
    expect(buttons.length).toBe(4)
  });

  it('appelle navigate avec le bon screen quand on clique', () => {
    // rendu du composant
    const { getByTestId } = render(<BottomBar />)
    const button = getByTestId('button-PageEcole')
    fireEvent.press(button)
    expect(mockNavigate).toHaveBeenCalledWith('PageEcole')
  })
})
