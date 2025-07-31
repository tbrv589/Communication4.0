
// import des différentes librairies react et component perso
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {wd, hd} from '../utils/responsive'

// creation d'un tableau comportant les écrans avec leurs icones associée
const lowbarre = [
  { screen: 'PageEcole', iconName: 'graduation-cap' },
  { screen: 'PageCampus', iconName: 'university' },
  { screen: 'HomeScreen', iconName: 'home' },
  { screen: 'PagePlanInscrip', iconName: 'calendar'},
];

// fonction principale de la barre de nav
const BottomBar = () => {
  // hook pour acceder a la navigation
  const navigation = useNavigation<any>();

  return ( 
    <SafeAreaView style={styles.container}>
      
      {/* génération des boutons de navigation par le tableau */}
      {lowbarre.map((item) => ( 
        <TouchableOpacity
          key={item.screen}
           testID={`button-${item.screen}`} 
          style={styles.button}
          onPress={() => navigation.navigate(item.screen)}
        >
           <FontAwesome name={item.iconName} size={wd(10)} color="#333" />
        </TouchableOpacity > 
      ))
      }
    </SafeAreaView>
  );
};

// styles pour la page, utilisant les fonctions wd et hd pour le responsive
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: hd(10),
    justifyContent: 'space-around',
    alignItems: 'center', 
    borderTopWidth: 1,
    borderTopColor: '#dfdfdfff',
    paddingHorizontal: wd(3),
  },  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    height:'auto'
  },
});

export default BottomBar;
