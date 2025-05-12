import React from "react";
import { AvatarSpeaker } from "../components/Avatar";
import { StyleSheet, ScrollView ,View, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../components/LowBarre";

const PageEcole = () => {


    const navigation = useNavigation<any>();


    const Envoiepage = (page: string) => {

        navigation.navigate(page);
    };

    return(
        
        <> 
    <SafeAreaView style={styles.SafeAreaView}> 


    <View style = {styles.avatarContainer}>    
     <AvatarSpeaker 
        message="dialogue homepage motherfuck"
        avatarSource={require('../assets/images/encore.png')}
        style = {styles.avatar}

        />
    </View>
    
    <View style = {styles.separateur} />
        
      
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
                <Text style = {styles.text}>Environnement et écologie</Text>


            </TouchableOpacity>
            
        
        
        
        </ScrollView>

        
        
        </SafeAreaView> 
        <BottomBar />
        </>
    
    )

}

// Styles --------------------------------------------------------------------------------------------------


const styles = StyleSheet.create({

    SafeAreaView: {

        flex: 1,
        paddingTop: 210,


    },


    avatarContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10, 
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
        // paddingTop: 16,
        // marginBottom: 16,
        // borderRadius: 12,


    },

    text: {

        color: 'black',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 50,
        textAlign: 'center'
        


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

        width: 110,
        height: 110,
        marginRight: 10,
        marginTop: 50,
        borderRadius: 8,
    


    },

    avatar: {

         position: 'absolute',
         justifyContent: 'center',
         top: 10

     }


})

export default PageEcole;