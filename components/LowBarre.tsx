import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import StackNavigator from '../src/navigation/stack';

const lowbarre = [
  { screen: 'PageEcole', iconName: 'graduation-cap' },
  { screen: 'PageCampus', iconName: 'sort-numeric-asc' },
  { screen: 'HomeScreen', iconName: 'sort-numeric-desc' },
  { screen: 'PagePlanInscrip', iconName: 'tasks'},
  { screen: 'nada', iconName: 'map-marker'},
];


const BottomBar = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {lowbarre.map((item) => ( 
        <TouchableOpacity
          key={item.screen}
          testID={`button-${item.screen}`}
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
