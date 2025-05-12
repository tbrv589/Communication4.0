//  HomeScreen
// Importation--------------------------------------------------------------------------------------------------


import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import BottomBar from '../components/LowBarre';
import { wd, hd } from '../utils/responsive';
import { AvatarSpeaker } from '../components/Avatar';


//--------------------------------------------------------------------------------------------------


const HomeScreen = () => {
  return (
    <BackgroundWrapper>

      <View style = {styles.container}>
        
          <Image style = {styles.logo} source ={require('../assets/images/logoPOLEFO.png')} />

        </View>

      <View style = {styles.headerContainer}>

        <Text style={styles.title}>Pole Formation 58-89{"\n"}& Ses écoles / instituts</Text>

        <AvatarSpeaker
        message="dialogue homepage motherfuck"
        avatarSource={require('../assets/images/encore.png')}
      />
      </View>

      



      <BottomBar />

    </BackgroundWrapper>


  );
};




// Styles --------------------------------------------------------------------------------------------------


const styles = StyleSheet.create({


  container: {

    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35


  },

  logo: {

    width: 85,
    height: 85,

  },

  
  imagelego: {

    width: 0,
    height: 0,

  },

  headerContainer: {    

    flex: 1,
    alignContent: 'center',
    alignItems: 'center',  
    marginTop: 10,         
    // marginBottom: 20,      
  },


  title: {
    fontSize: wd(5),         
    fontWeight: 'bold',   
    color: 'white',       
    textAlign: 'center',  
    textTransform: 'uppercase',
    fontFamily : 'monospace'

},





})



export default HomeScreen;
