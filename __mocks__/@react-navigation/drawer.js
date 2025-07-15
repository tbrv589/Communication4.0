import React from 'react';

// Mock minimaliste de createDrawerNavigator
export const createDrawerNavigator = () => {
  return {
    Navigator: ({ children }) => <>{children}</>,
    Screen: ({ children }) => <>{children}</>,
  };
};
