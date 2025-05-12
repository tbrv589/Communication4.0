// LowBarre.tsx 
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const BottomBar = () => {

  const navigation = useNavigation<any>()

  return (
    <SafeAreaView style={styles.arriereplan}>


  {/* ----------------------------Button PAGE ECOLE --------------------------------------- */}

      <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('PageEcole')}>
        <View style = {styles.view}>
          <Image style = {styles.logo}  source={require('../assets/images/school.png')} />
        </View>
      </TouchableOpacity>


  {/* ----------------------------Button PAGE ETAPE1 --------------------------------------- */}

      <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('PageEtape1')}>
        <View style = {styles.view}>
        <Image style = {styles.logo}  source={require('../assets/images/1.png')} />
        </View>
      </TouchableOpacity>


  {/* ----------------------------Button PAGE ETAPE 2 --------------------------------------- */}

  <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('PageEtape2')}>
        <View style = {styles.view}>
          <Image style = {styles.logo}  source={require('../assets/images/2.png')} /> 
        </View>
      </TouchableOpacity>


  {/* ----------------------------Button PAGE ETAPE 3 --------------------------------------- */}

  <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('PageEtape3')}>
        <View style = {styles.view}>
        <Image style = {styles.logo}  source={require('../assets/images/3.png')} /> 
        </View>
      </TouchableOpacity>


  {/* ----------------------------Button onverra --------------------------------------- */}

  <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('PageEtape3')}>
        <View style = {styles.view}>
        <Image style = {styles.logo}  source={require('../assets/images/map.png')} /> 
        </View>
      </TouchableOpacity>    

      </SafeAreaView>

  

  );


};

const styles = StyleSheet.create({

  container: {
    position: 'relative',
    bottom: 0,
    paddingRight: 20,
    paddingLeft: 5,
    right: 0,
    height: 80,
    // backgroundColor: '#FFFF',
    alignItems: 'center',
    flexDirection: 'row'

  },

  arriereplan: {
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#A6A6A6',
    alignItems: 'center',
    flexDirection: 'row'

  },

  

  logo: {

    height:45,
    width: 45,
    alignContent: 'center',
    left: 30
    
  },

  view: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  

});

export default BottomBar; // Export par défaut



