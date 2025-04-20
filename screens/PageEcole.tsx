import React from "react";
import { AvatarSpeaker } from "../components/Avatar";
import { StyleSheet, ScrollView ,View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Image } from "react-native-reanimated/lib/typescript/Animated";

// require('../assets/images/epsi1.PNG')

const PageEcole = () => {


    const navigation = useNavigation<any>();


    const Envoiepage = (page: string) => {

        navigation.navigate(page);
    };

    return(
        
        <> 
        


     <SafeAreaView style={{flex: 1, paddingTop: 30}}> 


    <View style = {styles.avatarContainer}>    
     <AvatarSpeaker 
        message="dialogue homepage motherfuck"
        avatarSource={require('../assets/images/encore.png')}
        style = {styles.avatar}

        />
    </View>
        
      
        <ScrollView contentContainerStyle={styles.scroll}>

        

            <TouchableOpacity style = {styles.zone} onPress={() => Envoiepage('HomeScreen')}> 

                <Image source= {require('../assets/images/logoPOLEFO.png')}  style={styles.image} />
                <Text style = {styles.text}> Industrie</Text>


            </TouchableOpacity>

            <View style = {styles.separateur} />

            <TouchableOpacity style = {styles.zone} onPress={() => Envoiepage('HomeScreen')}> 

                <Image source= {require('../assets/images/logoITII.png')}  style={styles.image} />
                <Text style = {styles.text}> Ingénierie</Text>


            </TouchableOpacity>

            <View style = {styles.separateur} />

            <TouchableOpacity style = {styles.zone} onPress={() => Envoiepage('HomeScreen')}> 

                <Image source= {require('../assets/images/logoEPSI.png')}  style={styles.image} />
                <Text style = {styles.text}> Informatique</Text>


            </TouchableOpacity>

            <View style = {styles.separateur} />

            <TouchableOpacity style = {styles.zone} onPress={() => Envoiepage('HomeScreen')}> 

                <Image source= {require('../assets/images/logoIFAG.png')}  style={styles.image} />
                <Text style = {styles.text}> Management</Text>


            </TouchableOpacity>

            <View style = {styles.separateur} />

            <TouchableOpacity style = {styles.zone} onPress={() => Envoiepage('HomeScreen')}> 

                <Image source= {require('../assets/images/logoIET.png')}  style={styles.image} />
                <Text style = {styles.text}> Environnement et écologie</Text>


            </TouchableOpacity>
            
        
        
        
        </ScrollView>

        </SafeAreaView> 
        </>
    
    )

}

// Styles --------------------------------------------------------------------------------------------------


const styles = StyleSheet.create({


    avatarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10, // pour qu’il passe AU-DESSUS du scroll
      },

    scroll : {


        paddingTop: 50,
        paddingHorizontal: 16
    },

    zone: {

        // flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#e6e6e6',
        padding: 1,
        // marginBottom: 16,
        // borderRadius: 12,


    },

    text: {



    },

    separateur : {


        height: 1,
        backgroundColor: 'black',
        width: '100%'

    },


    container: {

        flex: 1,
        alignContent: 'center',
        alignItems: 'center',  
        marginTop: 50,         
        marginBottom: 20, 


    },

    image: {

        width: 120,
        height: 120,
        marginRight: 10,
        marginTop: 210,
        borderRadius: 8,
    


    },

     avatar: {

         position: 'absolute',
         justifyContent: 'center',
         top: 10

     }


})

export default PageEcole;