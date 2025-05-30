import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const lowbarre = [
  { screen: 'PageEcole', iconName: 'graduation-cap' },
  { screen: 'PageEtape1', iconName: 'sort-numeric-asc' },
  { screen: 'PageEtape2', iconName: 'sort-numeric-desc' },
  { screen: 'PageEtape3', iconName: 'tasks'},
  { screen: 'PageCampus', iconName: 'map-marker'},
];


const BottomBar = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {lowbarre.map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={styles.button}
          onPress={() => navigation.navigate(item.screen)}
        >
          <FontAwesome name={item.iconName} size={30} color="#333" />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomBar;
