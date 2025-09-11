import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Linking, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/LowBarre';
import DrawerButton from '../../components/DrawerDesignButton';
import { wd, hd } from '../../utils/responsive'; // 👉 ton utilitaire responsive

const ITII = () => {
  const navigation = useNavigation<any>();
  const Envoiepage = (page: string) => {
    navigation.navigate(page);
  };

  const openWebUrl = async (): Promise<void> => {
    const url = 'https://www.pole-formation.net';
    try {
      const autor = await Linking.canOpenURL(url);
      if (autor) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Une erreur est survenue avec l’URL');
      }
    } catch (error) {
      Alert.alert('Erreur pour l’ouverture du lien');
    }
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <DrawerButton />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/images/logoITII.png')} />
        </View>

        <View style={styles.containerTextTitre}>
          <Text style={styles.TextTitre}>Formation d'ingénieur, par apprentissage</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.TextDescription}>
            L'ITII Bourgogne forme les experts de l'industrie en apprentissage. {"\n"}
            Les formations sont accessibles avec un BAC + 2 sur nos sites d'Auxerre et de Nevers. {"\n"}
            Les licences professionnelles sont délivrées par l'IUT et le CNAM. {"\n"}
            Les diplômes d'ingénieurs sont délivrés par l'ISAT.
          </Text>
        </View>

        <View style={styles.ContainerTextCoordo}>
          <Text style={styles.TextCoordo}>COORDONNÉES</Text>
        </View>

        <SafeAreaView style={styles.zoneCoordo}>
          <Text style={styles.TextDetailCordo}>
            AUXERRE 03.86.49.26.20 {'\n'}
            recrutement@pole-formation.net
          </Text>

          <TouchableOpacity style={styles.containerliensite} onPress={openWebUrl}>
            <Text style={styles.liensite}>www.pole-formation.net</Text>
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.containertextReseau1}>
          <Text style={styles.textReseau1}>REJOINS-NOUS SUR LES RESEAUX !</Text>
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
  scroll: {
    paddingTop: hd(3),
    paddingHorizontal: wd(4),
  },
  container: {
    alignItems: 'center',
    paddingTop: hd(4),
  },
  logo: {
    height: hd(14),
    width: wd(45),
    resizeMode: 'contain',
  },
  TextTitre: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wd(5),
    height: hd(8),
    width: wd(85),
  },
  containerTextTitre: {
    alignItems: 'center',
    paddingTop: hd(3),
  },
  containerText: {
    alignItems: 'center',
    height: hd(20),
    width: wd(90),
  },
  TextDescription: {
    fontSize: wd(3.5),
    textAlign: 'center',
  },
  ContainerTextCoordo: {
    alignItems: 'center',
  },
  TextCoordo: {
    fontSize: wd(5),
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  zoneCoordo: {
    backgroundColor: '#EAEAEA',
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'flex-start',
    paddingTop: hd(2),
    alignItems: 'center',
    height: hd(20),
    width: wd(90),
    borderRadius: wd(6),
    alignSelf: 'center',
    marginTop: hd(2),
  },
  TextDetailCordo: {
    fontSize: wd(4.5),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerliensite: {
    backgroundColor: 'white',
    marginTop: hd(3),
    borderRadius: wd(6),
    width: wd(65),
    height: hd(4),
    justifyContent: 'center',
  },
  liensite: {
    fontSize: wd(4),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textReseau1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: wd(5),
  },
  containertextReseau1: {
    paddingTop: hd(3),
  },
  CubeButton: {
    height: hd(6),
    width: hd(6),
  },
  cubecontainer: {
    position: 'absolute',
    pointerEvents: 'box-none',
    top: hd(4),
    left: wd(3),
    height: hd(6),
    width: hd(6),
  },
});

export default ITII;
