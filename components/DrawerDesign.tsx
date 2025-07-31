import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity,  } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import { wd, hd } from "../utils/responsive"; 


const DrawerDesign = ({ state, descriptors, navigation, ...rest }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require('../assets/images/logoPOLEFO.png')}
          style={styles.logo}
        />
      </View>

      <DrawerContentScrollView {...rest} contentContainerStyle={styles.scrollContainer}>
        {state.routes.map((route: any, index: number) => {
          const { drawerLabel, title, drawerIcon } = descriptors[route.key].options;
          const label = drawerLabel ?? title ?? route.name;
          const isActive = state.index === index;

          return (
            <View key={route.key}>
              <DrawerItem
                label={label}
                focused={isActive}
                icon={drawerIcon}
                onPress={() => navigation.navigate(route.name)}
                labelStyle={styles.label}
                activeTintColor="white"
                inactiveTintColor="white"
              />
              {(label === 'Accueil' || label === " Étape 1" || label === " Étape 2" || label === " Étape 3") && (
                <View style={styles.separator} /> )
              }
            </View>
          );
        })}
      </DrawerContentScrollView>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Nous Contacter </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerLink}>Plus d'informations ? </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#225D9C',
  },
  logoWrapper: {
    alignItems: 'center',
    paddingVertical: hd(4), 
  },
  logo: {
    width: wd(30),
    height: wd(30),
    borderWidth: 2,
    borderColor: '#000',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  label: {
    color: 'white',
    fontSize: wd(4), 
    marginLeft: -wd(2.5),
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    opacity: 0.3,
    marginHorizontal: wd(5),
  },
  footer: {
    paddingHorizontal: wd(5),
    paddingBottom: hd(2),
    borderTopColor: 'white',
    borderTopWidth: 1,
  },
  footerLink: {
    color: 'white',
    fontSize: wd(4),
    marginVertical: hd(0.8),
  },
});

export default DrawerDesign;
