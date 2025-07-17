jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomBar from '../components/LowBarre';

describe('BottomBar', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
   

    require('@react-navigation/native').useNavigation = () => ({
      navigate: mockNavigate,
    });
    mockNavigate.mockClear();
  });

  it('affiche le bon nombre de boutons', () => {
    const { queryAllByTestId } = render(<BottomBar />);
    const buttons = queryAllByTestId(/button-/);
    expect(buttons.length).toBe(5);
  });

  it('appelle navigate avec le bon screen quand on clique', () => {
    const { getByTestId } = render(<BottomBar />);
    const button = getByTestId('button-PageEcole');
    fireEvent.press(button);
    expect(mockNavigate).toHaveBeenCalledWith('PageEcole');
  });
});
