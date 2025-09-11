import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Linking, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/LowBarre';
import DrawerButton from '../../components/DrawerDesignButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUIMM } from '../../services/UIMMService';
import { wd, hd } from '../../utils/responsive';

const UIMM = () => {

    const navigation = useNavigation<any>();
    const Envoiepage = (page : string) => {
        navigation.navigate(page);
    };

    const [UIMM, setUIMM] = useState<any[]>([])

    const openWebUrl = async (): Promise<void> => {
        const url = 'https://www.pole-formation.net'; 
        try {
            const autor = await Linking.canOpenURL(url);
            if (autor) {
                await Linking.openURL(url);
            } else {
                Alert.alert('Une erreur est survenue avec l’URL')
            }
        } catch (error) {
            Alert.alert ('Erreur lors de l’ouverture du lien')
        }
    };

    useEffect(() => {

        const fetchData = async () => {
            try{
                const uimm = await getUIMM();
                setUIMM(uimm)
                console.log("données recus", JSON.stringify(uimm, null, 2))
            } catch (error) {
                console.error("erreur chargement", error)
                
            }
        } 
    }, [])

  return (
    <SafeAreaView style={styles.SafeAreaView}>

        <DrawerButton />

        <ScrollView contentContainerStyle={styles.scroll}>

            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/logoPOLEFO.png')} />
            </View>

            <View style={styles.containerTextTitre}>
                <Text style={styles.TextTitre}>
                    Centre de formation par apprentissage dans l'industrie
                </Text>
            </View>

            <View style={styles.containerText}> 
                <Text style={styles.TextDescription}>
                    Le Pôle formation 58-89, forme aux métiers d'avenir de l'industrie. 
                    Les formations sont accessibles post 3ème sur nos sites d'Auxerre et de Nevers.
                </Text>
            </View>

            <View style={styles.ContainerTextCoordo}>
                <Text style={styles.TextCoordo}>COORDONNÉES</Text>
            </View>

            <SafeAreaView style={styles.zoneCoordo}>
                <Text style={styles.TextDetailCordo}>
                    AUXERRE 03.86.49.26.20 {'\n'} 
                    NEVERS 03.86.59.73.84 {'\n'} 
                    recrutement@pole-formation.net
                </Text>

                <TouchableOpacity style={styles.containerliensite} onPress={openWebUrl}>
                    <Text style={styles.liensite}>www.pole-formation.net</Text>
                </TouchableOpacity>
            </SafeAreaView>

            <View style={styles.containertextReseau1}>
                <Text style={styles.textReseau1}>REJOINS-NOUS SUR LES RÉSEAUX !</Text>
            </View>

            <View style={styles.containerReseauxPrime}>
                <View style={styles.containerReseaux1}> 
                    <FontAwesome name='instagram' size={wd(4.5)} color='black' />
                    <Text style={styles.reseaux}> Pole-formation58-89</Text>
                </View>

                <View style={styles.containerReseaux2}> 
                    <FontAwesome  name='linkedin' size={wd(4.5)} color='black' />
                    <Text style={styles.reseaux}> Pole-formation58-89</Text>
                </View>

                <View style={styles.containerReseaux2}> 
                    <FontAwesome name='facebook' size={wd(4.5)} color='blue' />
                    <Text style={styles.reseaux}> Pole-formation58-89</Text>
                </View>
            </View>

        </ScrollView>

        <BottomBar />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    SafeAreaView: {
        flex: 1,
    },

    scroll:{
        paddingTop: hd(3),
        paddingHorizontal: wd(4)
    },

    container:{
        alignItems: 'center',
        paddingTop: hd(4)
    },

    logo:{
        height: hd(15),
        width: wd(30),
        resizeMode: 'contain'
    },

    TextTitre:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: wd(5),
        height: hd(10),
        width: wd(85),
    },

    containerTextTitre:{
        alignItems:'center',
        paddingTop: hd(3)
    },

    containerText:{
        alignItems: 'center',
        height: hd(12),
        width: wd(90)
    },

    TextDescription:{
        fontSize: wd(3.8),
        textAlign: 'left'
    },

    ContainerTextCoordo:{
        alignItems: 'center',
        marginTop: hd(2)
    },

    TextCoordo:{
        fontSize: wd(5),
        textDecorationLine: 'underline',
        textAlign: 'center'
    },

    zoneCoordo:{
        backgroundColor: '#EAEAEA',
        borderColor: 'black', 
        borderWidth: 2,
        justifyContent: 'flex-start',
        paddingTop: hd(1.5),
        alignItems: 'center',
        height: hd(20),
        width: wd(90),
        borderRadius: wd(6),
        marginTop: hd(2),
        alignSelf: 'center'
    },

    TextDetailCordo:{
        fontSize: wd(4.2),
        textAlign: 'center',
        fontWeight: 'bold', 
    },

    containerliensite: {
        backgroundColor: 'white',
        marginTop: hd(2),
        borderRadius: wd(6),
        width: wd(65),
        height: hd(5),
        justifyContent: 'center'
    },

    liensite:{
        fontSize: wd(4),
        fontWeight: 'bold',
        textAlign: 'center'
    },

    textReseau1: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: wd(5),
    },

    containertextReseau1:{
        paddingTop: hd(3)
    },

    reseaux:{
        color: 'blue',
        fontSize: wd(4),
        marginLeft: wd(2)
    },

    containerReseaux1:{
        flexDirection: 'row',
        alignItems:'center'
    },

    containerReseaux2:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: hd(2)
    },

    containerReseauxPrime:{
        alignItems: 'center',
        paddingTop: hd(2)
    }
})

export default UIMM
