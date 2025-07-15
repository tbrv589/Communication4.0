import React from 'react';
import { Text, View } from 'react-native';
import renderer, { act } from 'react-test-renderer';

test('Simple Text renders', () => {
  let testInstance;

  act(() => {
    testInstance = renderer.create(
      <View>
        <Text>Hello</Text>
      </View>
    );
  });

  expect(testInstance).toBeTruthy(); // PAS toJSON()
});
