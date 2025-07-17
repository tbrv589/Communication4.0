console.log('chargement jest.config.js OK');


module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-gesture-handler|react-native-reanimated|@react-navigation|react-native-screens|react-native-safe-area-context|react-native-drawer-layout|react-native-vector-icons|react-native-linear-gradient|react-native-calendars|react-native-swipe-gestures)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
  '^@react-navigation/elements/src/assets/back-icon.png$': '<rootDir>/__mocks__/fileMock.js',
  '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  '^react-native-gesture-handler$': '<rootDir>/__mocks__/react-native-gesture-handler.js',
  '^react-native-drawer-layout$': '<rootDir>/__mocks__/react-native-drawer-layout.js',
  '^react-native/Libraries/Animated/NativeAnimatedHelper$': '<rootDir>/__mocks__/react-native/Libraries/Animated/NativeAnimatedHelper.js',
},

};
