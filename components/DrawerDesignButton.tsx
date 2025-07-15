import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function DrawerButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.drawer}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    >
      <Image
        style={styles.imageDrawer}
        source={require('../assets/images/cubeDrawer.png')}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  drawer: {

    paddingTop: 35,
    marginTop: 35,
    marginLeft: 10,
    width: 50,
    height: 50,
    position: 'absolute',
    pointerEvents: 'box-none',
    zIndex: 99
  },
  imageDrawer: {

    position: 'absolute',
    width: 50,
    height: 50,
    pointerEvents: 'box-none',
    zIndex: 10
    
  },
});
