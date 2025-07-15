import React, { useEffect, useState } from "react";
import {StyleSheet, ScrollView,SafeAreaView, View, Image, Text, TouchableOpacity, ActivityIndicator,} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
import BottomBar from "../components/LowBarre";
import DrawerButton from "../components/DrawerDesignButton";
import { AvatarSpeaker } from "../components/Avatar";
import { getAvatarMessage, getEcoles } from "../services/ecolesService";
import {wd, hd} from "../utils/responsive"

const PageEcole = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [ecoles, setEcoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const msg = await getAvatarMessage();
        setMessage(msg);

        const ecolesData = await getEcoles();
        setEcoles(ecolesData);
        console.log("données recus", JSON.stringify(ecolesData, null, 2));
      } catch (error) {
        console.error("erreur chargement", error);
        setMessage("erreur de chargement");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const EnvoiePage = (page: string) => {
    navigation.navigate(page);
  };

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}>
        <DrawerButton />

        <View style={styles.avatarContainer}>
          {message && (
            <AvatarSpeaker
              message={message}
              avatarSource={require("../assets/images/IconePersonne.png")}
              style={styles.avatar}
            />
          )}
        </View>

        <View style={styles.separateur} />

        <ScrollView contentContainerStyle={styles.scroll}>
          {ecoles.map((item, index) => {
  // fonction Titre ECOLE
  const titreUIMM = item?.TitreUIMM || "titre manquant";
  const titreITII = item?.TitreITII || "titre manquant";
  const titreIET = item?.TitreIET || "titre manquant";
  const titreEPSI = item?.TitreEPSI || "titre manquant";
  const titreIFAG = item?.TitreIFAG || "titre manquant";

  // fonction Logo ECOLE
  const logoUIMM = item?.LogoUIMM?.url 
  const imageUrlUIMM = logoUIMM ? `http://10.0.2.2:1337${logoUIMM}` : null;

  const logoITII = item?.logoITII?.url 
  const imageUrlITII = logoITII ? `http://10.0.2.2:1337${logoITII}` : null;

  const logoIET = item?.logoIET?.url 
  const imageUrlIET = logoIET ? `http://10.0.2.2:1337${logoIET}` : null;

  const logoIFAG = item?.logoIFAG?.url 
  const imageUrlIFAG = logoIFAG ? `http://10.0.2.2:1337${logoIFAG}` : null;

  const logoEPSI = item?.logoEPSI?.url 
  const imageUrlEPSI = logoITII ? `http://10.0.2.2:1337${logoEPSI}` : null;

  return (
    <React.Fragment key={item.id || index}>
      <TouchableOpacity
        style={styles.zone}
        onPress={() => EnvoiePage("UIMM")}
      >
        {imageUrlUIMM ? (
          <Image
            source={{ uri: imageUrlUIMM }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/logoPOLEFO.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{titreUIMM}</Text>
      </TouchableOpacity>

      <View style={styles.separateur} />

      <TouchableOpacity
        style={styles.zone}
        onPress={() => EnvoiePage("ITII")}
      >
        {imageUrlITII ? (
          <Image
            source={{ uri: imageUrlITII }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/logoITII.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{titreITII}</Text>
      </TouchableOpacity>

      <View style={styles.separateur} />

      <TouchableOpacity
        style={styles.zone}
        onPress={() => EnvoiePage("EPSI")}
      >
        {imageUrlEPSI ? (
          <Image
            source={{ uri: imageUrlEPSI}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/logoEPSI.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{titreEPSI}</Text>
      </TouchableOpacity>

      <View style={styles.separateur} />

      <TouchableOpacity
        style={styles.zone}
        onPress={() => EnvoiePage("IFAG")}
      >
        {imageUrlIFAG ? (
          <Image
            source={{ uri: imageUrlIFAG}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/logoIFAG.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{titreIFAG}</Text>
      </TouchableOpacity>

      <View style={styles.separateur} />

       <TouchableOpacity
        style={styles.zone}
        onPress={() => EnvoiePage("IET")}
      >
        {imageUrlIET ? (
          <Image
            source={{ uri: imageUrlIET}}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={require("../assets/images/logoIET.png")}
            style={styles.image}
          />
        )}
        <Text style={styles.text}>{titreIET}</Text>
      </TouchableOpacity>

      <View style={styles.separateur} />
    </React.Fragment>
      );
      })}

        </ScrollView>
      </SafeAreaView>

      <BottomBar />
    </>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    paddingTop: hd(28), 
  },
  avatarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 10,
  },
  scroll: {
    paddingTop: hd(6.5), 
    paddingHorizontal: wd(4), 
  },
  zone: {
    alignItems: "center",
    alignSelf: "center",
    padding: 1,
  },
  text: {
    color: "black",
    fontSize: wd(9), 
    fontWeight: "bold",
    marginBottom: hd(6.5),
    textAlign: "center",
  },
  separateur: {
    height: 1,
    backgroundColor: "black",
    width: "100%",
  },
  image: {
    width: wd(40),
    height: wd(40), 
    marginTop: hd(6.5), 
    borderRadius: 8,
    alignSelf: "center",
    resizeMode: 'contain',
    
  },
  avatar: {
    position: "absolute",
    justifyContent: "center",
    top: hd(1.3),
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PageEcole;
