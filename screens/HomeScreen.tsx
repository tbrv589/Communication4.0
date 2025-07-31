//  HomeScreen
// Importation--------------------------------------------------------------------------------------------------


import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { BackgroundWrapper } from '../components/BackgroundWrapper';
import BottomBar from '../components/LowBarre';
import { wd, hd } from '../utils/responsive';
import { AvatarSpeaker } from '../components/Avatar';
import { getAvatarMessage } from '../services/homepageService';


//--------------------------------------------------------------------------------------------------


const HomeScreen = () => {

    const [messageHomeScreen, setMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchData = async () => {

        try{
          const msg = await getAvatarMessage();
          setMessage(msg)
        }
        catch (error) {
          console.error("erreur de chargement", error)
          setMessage("erreur de chargement");
        }
        finally{
          setLoading(false)
        }
      }
      fetchData()
    }, [])

  return (
    <BackgroundWrapper>

    

      <View style = {styles.container}>
        
          <Image style = {styles.logo} source ={require('../assets/images/logoPOLEFO.png')} />

        </View>

      <View style = {styles.headerContainer}>

        <Text style={styles.title}>Pole Formation 58-89{"\n"}& Ses écoles / instituts</Text>

        {messageHomeScreen && (
        <AvatarSpeaker
        message= {messageHomeScreen}
        avatarSource={require('../assets/images/IconePersonne.png')}
      /> )
        }
        
      </View>


    <View style={styles.CubeContainer}>
      <Image
        source={require('../assets/images/cube3d.png')}
        style={styles.cube}
      />
    </View>

      

    

      {/* <DrawerNav /> */}

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
  },


  title: {
    fontSize: wd(5),         
    fontWeight: 'bold',   
    color: 'white',       
    textAlign: 'center',  
    textTransform: 'uppercase',
    fontFamily : 'monospace'

},

CubeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  
  },
  cube: {
    width: 275,
    height: 275,
    alignContent: 'center',
    alignItems: 'center',
    
    
  },


})

export default HomeScreen;
