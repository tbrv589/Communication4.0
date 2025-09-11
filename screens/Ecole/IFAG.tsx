import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Linking, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../../components/LowBarre';
import DrawerButton from '../../components/DrawerDesignButton';
import { wd, hd } from '../../utils/responsive'; // 👉 ton fichier avec wd/hd

const IFAG = () => {
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
          <Image style={styles.logo} source={require('../../assets/images/logoIFAG.png')} />
        </View>

        <View style={styles.containerTextTitre}>
          <Text style={styles.TextTitre}>Ecole de management et de commerce</Text>
        </View>

        <View style={styles.containerText}>
          <Text style={styles.TextDescription}>
            L’IFAG Bourgogne-France-Comté forme les {'\n'} créateurs et repreneurs d’entreprises ainsi que les {'\n'} futurs managers et responsables dans les {'\n'} domaines du marketing - commercial, de la {'\n'} gestion - finance, du management - ressources {'\n'} humaines ou encore de la stratégie. L’IFAG est {'\n'} accessible à partir du BAC sur notre site d’Auxerre.
          </Text>
        </View>

        <View style={styles.ContainerTextCoordo}>
          <Text style={styles.TextCoordo}>COORDONNÉES</Text>
        </View>

        <SafeAreaView style={styles.zoneCoordo}>
          <Text style={styles.TextDetailCordo}>
            AUXERRE 03.86.49.26.20 {'\n'} NEVERS 03.86.59.73.84 {'\n'} recrutement@pole-formation.net
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
    height: hd(12),
    width: wd(55),
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
    height: hd(18),
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
    paddingTop: hd(1.5),
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

export default IFAG;
