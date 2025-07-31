import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text, SafeAreaView} from "react-native";
import { AvatarSpeaker } from "../components/Avatar";
import { useNavigation } from "@react-navigation/native";
import Carrousel from "../components/Carrousel";
import { ImageCarrousel } from "../components/elementcarrousel";
import BottomBar from "../components/LowBarre";
import DrawerButton from "../components/DrawerDesignButton";

const PageEtape2 = () => {

    const navigation = useNavigation<any>();
    
        const EnvoiePage = (page : string) => {
    
    
            navigation.navigate(page);
        }

    

    return(

        <>

        <DrawerButton />
        <SafeAreaView style={styles.SafeAreaView}>

        

            <View style = {styles.avatarContainer}>
            
                <AvatarSpeaker 
                        message="dialogue PageEtape2"
                        avatarSource={require('../assets/images/IconePersonne.png')}
                        style = {styles.avatar}
                
                        />
        </View>

        <View style = {styles.separateur} />


        <ScrollView contentContainerStyle = {styles.scroll}>
        

        <View style={styles.carrousel}>

        <Carrousel itemList={ImageCarrousel}/>

        </View>

        <View style={styles.separateur} />

        <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                            }>
        
        <View style = {styles.container}>

        <Text style = {styles.text}> Soirées Post Bac</Text>

        </View>
        
        
        </TouchableOpacity>

        <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                            }>
        
        <View style = {styles.container}>

        <Text style = {styles.text}> Jeudis connecté</Text>

        </View>
        
        
        </TouchableOpacity>

        <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                            }>
        
        <View style = {styles.container}>

        <Text style = {styles.text}> Rendez-vous individuels</Text>

        </View>
        
        
        </TouchableOpacity>


    



        </ScrollView>
        </SafeAreaView>
        <BottomBar />
        </>
    );
};


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


    text:{

        fontSize: 32,
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
        paddingTop: 230,
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


})

export default PageEtape2;