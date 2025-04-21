// LowBarre.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageEcole from '../screens/PageEcole';

const BottomBar = () => {

  const navigation = useNavigation<any>()

  return (
    <View style={styles.container}>
      <Button title="Page ecole" color="black" 
        
        onPress={() => navigation.navigate('PageEcole')}

      />
      <Button title="PageEtape1" color="black" 
        
        onPress={() => navigation.navigate('PageEtape1')}

      />

      <Button title="PageEtape2" color="black" 
        
        onPress={() => navigation.navigate('PageEtape2')}

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
    alignItems: 'center',
    flexDirection: 'row'

  },

  text: {
    color: 'black',
    fontSize: 16,
  },

});

export default BottomBar; // Export par défaut
