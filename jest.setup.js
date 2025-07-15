// jestSetup.js
import 'react-native-gesture-handler/jestSetup';

// Mock complet pour react-native-drawer-layout
jest.mock('react-native-drawer-layout', () => {
  const React = require('react');
  const { View } = require('react-native');
  return function DrawerLayout(props) {
    return React.createElement(View, {}, props.children);
  };
});

// Mock pour react-native-gesture-handler
jest.mock('react-native-gesture-handler', () => {
  const React = require('react');
  const { View } = require('react-native');
  return {
    GestureHandlerRootView: (props) => React.createElement(View, props, props.children),
    // Mock d'autres exports si besoin
    State: {
      UNDETERMINED: -1,  // mocker la valeur manquante ici
      BEGAN: 1,
      ACTIVE: 2,
      END: 3,
      FAILED: 4,
      CANCELLED: 5,
    },
  };
});
