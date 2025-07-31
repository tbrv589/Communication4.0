import React from 'react';
import { render } from '@testing-library/react-native';
import { AvatarSpeaker } from '../components/Avatar';


describe('AvatarSpeaker', () => {
  // image simulé pour tester l'affichage de l'avatar
  const fakeAvatar = { uri: 'https://example.com/avatar.png' }

  it('affiche tous les mots du message', () => {
    const message = 'Dialogue page HomeScreen'
    // rendu du composant avec le message test 
    const { getByText } = render(
      <AvatarSpeaker message={message} avatarSource={fakeAvatar} /> 
    );
    // verifie si chaque mot du message est présent
    expect(getByText('Dialogue')).toBeTruthy()
    expect(getByText('page')).toBeTruthy()
    expect(getByText('HomeScreen')).toBeTruthy()
  })

  it('affiche l’avatar avec la bonne source', () => {
    // rendu du composant avec une image et un message
    const message = 'Salut'
    const { getByTestId } = render(
      <AvatarSpeaker
        message={message}
        avatarSource={fakeAvatar}
      />
    );
    const image = getByTestId('avatar-image')
    expect(image.props.source).toEqual(fakeAvatar)
  });
});
