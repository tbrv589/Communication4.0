//  HomeScreen
// Importation--------------------------------------------------------------------------------------------------


import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import BottomBar from '../components/LowBarre';
import { Dimensions } from 'react-native';
import { wd, hd } from '../utils/reponsive';
import TextResponsive from '../utils/textresponsive'
import { AvatarSpeaker } from '../components/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';




//--------------------------------------------------------------------------------------------------


const HomeScreen = () => {
  return (
    <BackgroundWrapper>
      <View style = {styles.headerContainer}>

        <Text style={styles.title}> Pole Formation 58-89 </Text>

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

  //  avatar: {

  //    flex: 1,
  //    paddingHorizontal: 10,


  //  },
  
  imagelego: {

    width: 0,
    height: 0,

  },

  headerContainer: {    

    flex: 1,
    alignContent: 'center',
    alignItems: 'center',  
    marginTop: 50,         
    marginBottom: 20,      
  },


  title: {
    fontSize: wd(5),         
    fontWeight: 'bold',   
    color: 'white',       
    textAlign: 'center',  
    textTransform: 'uppercase',
    fontFamily : 'monospace'

}



})



export default HomeScreen;
