import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Linking, Alert, TouchableOpacity } from 'react-native'
// import FastImage from 'react-native-fast-image';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/LowBarre';
import DrawerButton from '../../components/DrawerDesignButton';


const ITII = () => {

    const navigation = useNavigation<any>();
    const Envoiepage = (page : string) => {

        navigation.navigate(page);
    };



    const openWebUrl = async (): Promise<void> => {

        const url = 'www.pole-formation.net';

        try{
            const autor = await Linking.canOpenURL(url);

            if (autor){

                await Linking.openURL(url);

            } else {

                Alert.alert('une erreur est sur l url')
            }

        }   catch(error){

            Alert.alert ('Erreur pour l ouverture du lien')
        }
        
    };

  return (
    
    <SafeAreaView style = {styles.SafeAreaView}>

        <DrawerButton />

        <ScrollView contentContainerStyle = {styles.scroll}>

            <View style = {styles.container} >

            <Image style = {styles.logo} source={require('../../assets/images/logoPOLEFO.png')} />

            </View>

            <View style = {styles.containerTextTitre}>

                <Text style = {styles.TextTitre}> Centre de formation par apprentissage dans l'industrie </Text>

            </View>

            <View style = {styles.containerText}> 

                <Text style = {styles.TextDescription}>Le Pôle formation 58-89, forme aux metiers d'avenir de l'industrie. Les formations sont accessibles post 3eme sur nos sites d'Auxerre et de Nevers  </Text>

            </View>

            <View style = {styles.ContainerTextCoordo}>

                <Text style = {styles.TextCoordo}>COORDONNÉES</Text>

            </View>

            <SafeAreaView style = {styles.zoneCoordo}>

                <Text style = {styles.TextDetailCordo}> AUXERRE 03.86.49.26.20 {'\n'} NEVERS 03.86.59.73.84 {'\n'} recrutement@pole-formation.net </Text>

                <TouchableOpacity style={styles.containerliensite} onPress={openWebUrl}>
            <Text style={styles.liensite}>www.pole-formation.net</Text>
                </TouchableOpacity>

            </SafeAreaView>

            <View style = {styles.containertextReseau1}>

                <Text style = {styles.textReseau1}>REJOINS-NOUS SUR LES RESEAUX !</Text>

            </View>

        </ScrollView>

    <BottomBar />


    </SafeAreaView>

  )
}

const styles = StyleSheet.create({

    SafeAreaView: {

        flex: 1,
        // paddingTop: 210,

    },

    scroll:{

        paddingTop: 25,
        paddingHorizontal: 16

    },


    container:{

        
        alignItems: 'center',
        paddingTop: 35
    },
    logo:{
        height: 130,
        width: 130
    },

    TextTitre:{



        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        height: 85,
        width: 321,

    },

    containerTextTitre:{

        alignItems:'center',
        paddingTop: 25
        
        

    },

    containerText:{

        alignItems: 'center',
        height: 80,
        width: 345
        
    },

    TextDescription:{

        fontSize: 14,
        textAlign: 'left'

    },

    ContainerTextCoordo:{

        alignItems: 'center'
    },

    TextCoordo:{

        fontSize: 20,
        textDecorationLine: 'underline',
        textAlign: 'center'
    },

    zoneCoordo:{

        backgroundColor: '#EAEAEA',
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'flex-start',
        paddingTop: 10,
        alignItems: 'center',
        height: 150,
        width: 354,
        borderRadius: 25,
        left: 5
    },

    TextDetailCordo:{

        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
    },

    containerliensite: {

        backgroundColor: 'white',
        top: 25,
        borderRadius: 25,
        width: 239 ,
        height: 31,
        justifyContent: 'center'
    },

    liensite:{

        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textReseau1: {
        
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        
    
    },

    containertextReseau1:{

        paddingTop: 20

    },

    CubeButton: {

        height: 50,
        width: 50

    },

    cubecontainer:{

        position: 'absolute',
        // zIndex: 25,
        pointerEvents: 'box-none', //permet de cliquer a travers le container et dcp pas besoin de zindex
        top: 30,
        left: 10,
        height: 50,
        width: 50
    }
})

export default ITII