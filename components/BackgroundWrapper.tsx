import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
// import { wd, hd } from '../utils/reponsive';

interface Props {
  children: ReactNode; 
}

export const BackgroundWrapper: React.FC<Props> = ({ children }) => {
  return (
    <ImageBackground source={require('../assets/images/background.png')} 
    style={styles.background}>
      {children}
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    
  },
});

