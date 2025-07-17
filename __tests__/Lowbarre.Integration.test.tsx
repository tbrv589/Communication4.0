import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
import BottomBar from '../components/LowBarre'


const mockNavigate = jest.fn()

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

describe('BottomBar Integration', () => {
  beforeEach(() => {
    mockNavigate.mockClear()
  });

  it('affiche les boutons et navigue correctement', () => {
    const { getByTestId } = render(<BottomBar />)

    const buttons = [
      'button-PageEcole',
      'button-PageCampus',
      'button-HomeScreen',
      'button-PagePlanInscrip',
      
    ];

    buttons.forEach((testID) => {
      const btn = getByTestId(testID)
      expect(btn).toBeTruthy();
    });

    fireEvent.press(getByTestId('button-PageEcole'))
    expect(mockNavigate).toHaveBeenCalledWith('PageEcole')

    fireEvent.press(getByTestId('button-HomeScreen'))
    expect(mockNavigate).toHaveBeenCalledWith('HomeScreen')
  });
});
