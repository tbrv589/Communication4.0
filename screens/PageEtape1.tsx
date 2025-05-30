import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import { AvatarSpeaker } from "../components/Avatar";
import {TouchableOpacity} from 'react-native';
import BottomBar from "../components/LowBarre";





const PageEtape1 = () => {

    const navigation = useNavigation<any>();

    const EnvoiePage = (page : string) => {


        navigation.navigate(page);
    }


    return(

        <>
            <SafeAreaView style={styles.SafeAreaView}>

                <View style = {styles.avatarContainer}>

                        <AvatarSpeaker 
                                message="dialogue homepage"
                                avatarSource={require('../assets/images/encore.png')}
                                style = {styles.avatar}
                        
                                />
                </View>

                <View style = {styles.separateur} />

                
                <ScrollView contentContainerStyle = {styles.scroll}>

                    <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                    }>

                        <View style = {styles.container}>

                        <Text style = {styles.text}> Ateliers de l'orientation</Text>

                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                    }>

                        <View style = {styles.container}>

                        <Text style = {styles.text}> Soirées de l'orientation</Text>

                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                    }>

                        <View style = {styles.container}>

                        <Text style = {styles.text}> Ateliers de l'industrie</Text>

                        </View>


                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.zone} onPress={() => EnvoiePage('HomeScreen') //a définir page
                    }>

                        <View style = {styles.container}>

                        <Text style = {styles.text}> Escape game de l'industrie</Text>

                        </View>


                    </TouchableOpacity>

                    <View style = {styles.separateur} />
                    
                    <TouchableOpacity style = {styles.zone2} onPress={() => EnvoiePage('HomeScreen')}> 
        
                        <Text style = {styles.text2}> Profilage Métier </Text>
        
        
                    </TouchableOpacity>
        
                    <View style = {styles.separateur} />

                    <TouchableOpacity style = {styles.zone2} onPress={() => EnvoiePage('HomeScreen')}> 
        
                        <Text style = {styles.text2}> Profilage Compétence</Text>
        
        
                    </TouchableOpacity>
    

                </ScrollView>









            </SafeAreaView>
            <BottomBar />
        </>




    );

};

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

    scroll : {


        paddingTop: 50,
        paddingHorizontal: 16
    },

    zone: {

        alignItems: 'center',
        padding: 1,
    },

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

// style pour profilage----------------------------------------

zone2: {

    alignItems: 'center',
    padding: 1,
    


},

text2: {

    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 25,
    


},


})



export default PageEtape1;