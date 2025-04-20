// LowBarre.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageEcole from '../screens/PageEcole';

const BottomBar = ({}) => {

  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <Button title="Page ecole" color="black" 
        
        onPress={() => navigation.navigate('PageEcole')}

      />
    </View>
  );

};

const styles = StyleSheet.create({

  container: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 16,
  },

});

export default BottomBar; // Export par défaut
