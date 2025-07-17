// __tests__/AvatarSpeaker.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import { AvatarSpeaker } from '../components/Avatar';
import { Image } from 'react-native';

describe('AvatarSpeaker', () => {
  const fakeAvatar = { uri: 'https://example.com/avatar.png' };

  it('affiche tous les mots du message', () => {
    const message = 'Bonjour tout le monde';
    const { getByText } = render(
      <AvatarSpeaker message={message} avatarSource={fakeAvatar} /> 
    );

    expect(getByText('Bonjour ')).toBeTruthy();
    expect(getByText('tout ')).toBeTruthy();
    expect(getByText('le ')).toBeTruthy();
    expect(getByText('monde ')).toBeTruthy();
  });

  it('affiche l’avatar avec la bonne source', () => {
    const message = 'Salut';
    const { getByTestId } = render(
      <AvatarSpeaker
        message={message}
        avatarSource={fakeAvatar}
      />
    );

    const image = getByTestId('avatar-image');
    expect(image.props.source).toEqual(fakeAvatar);
  });
});
