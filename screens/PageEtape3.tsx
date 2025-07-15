import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, SafeAreaView, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AvatarSpeaker } from "../components/Avatar";
import {wd, hd} from '../utils/responsive'
import BottomBar from "../components/LowBarre";
import DrawerButton from "../components/DrawerDesignButton";


const PageEtape3 = () => {

  const navigation = useNavigation<any>();
      
          const EnvoiePage = (page : string) => {
      
      
              navigation.navigate(page);
          }
  
      
  
      return(
  
      <>
      <SafeAreaView style={styles.SafeAreaView}>

        <DrawerButton />

          <View style = {styles.avatarContainer}>
          
              <AvatarSpeaker 
                      message="dialogue homepage"
                      avatarSource={require('../assets/images/IconePersonne.png')}
                      style = {styles.avatar}
              
                      />
      </View>

      <View style = {styles.separateur} />


      <ScrollView contentContainerStyle = {styles.scroll}>

        <View>

        <Image style = {styles.ImageCV} source={require('../assets/images/3ckiparle.png')}  />

        </View>
      
        <View>

          <Text style= {styles.Text_CV}>Créer ta vidéo CV !</Text> 


        </View>
      


      <View style={styles.separateur} />

      <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                          }>
      
      <View style = {styles.container}>

      <Text style = {styles.text}>Ateliers de recherche d'emploi</Text>

      </View>
      
      
      </TouchableOpacity>

      <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                          }>
      
      <View style = {styles.container}>

      <Text style = {styles.text}>Speed Recrutement</Text>

      </View>
      
      
      </TouchableOpacity>
      </ScrollView>

      <BottomBar />
      </SafeAreaView>
      </>
  );

}

const styles = StyleSheet.create({

container: {

  backgroundColor: '#225D8C',
  paddingHorizontal: 36,
  paddingVertical: 8,
  borderRadius: 15,
  marginTop: 10,
  marginBottom: 25,
  alignItems: 'flex-start',     
  

},

Text_CV:{

  fontSize: 32,
  textDecorationLine: 'underline',
  textAlign: 'center'
},


text:{

  fontSize: wd(8),
  fontWeight: 'semibold',
  color: 'white',
  textDecorationLine: 'underline',
  alignContent: 'center',
  textAlign: 'left'


},

zone: {

  alignItems: 'center',
  padding: 1,
},


SafeAreaView: {

  flex: 1,
  paddingTop: 210,
},

scroll : {


  paddingTop: 50,
  paddingHorizontal: 16
},

carrousel: {

  flex: 1,
  justifyContent: "center",
  // alignItems: "center"

},


avatarContainer: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  alignItems: 'center',
  zIndex: 10, 
},

avatar: {

  position: 'absolute',
  justifyContent: 'center',
  top: 10

}, 


separateur : {


  height: 1,
  backgroundColor: 'black',
  width: '100%'

},

ImageCV:{

  width: 325,
  height: 215,
  borderRadius: 25,
  alignSelf: 'center'
}

})

export default PageEtape3;