module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-native-gesture-handler' +
      '|react-native-reanimated' +
      '|@react-navigation' +
      '|react-native-screens' +
      '|react-native-safe-area-context' +
      '|react-native-drawer-layout' +
      '|react-native-vector-icons' + 
      '|react-native-linear-gradient' +
      '|react-native-calendars' +  
      '|react-native-swipe-gestures' + 
    ')/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  moduleNameMapper: {
  '^react-native-gesture-handler$': '<rootDir>/__mocks__/react-native-gesture-handler.js',
  '^react-native-drawer-layout$': '<rootDir>/__mocks__/react-native-drawer-layout.js',
  '^@react-navigation/drawer$': '<rootDir>/__mocks__/@react-navigation/drawer.js',
  
},


};
