
// import des différentes librairies react et component perso

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DrawerButton from '../components/DrawerDesignButton';
import BottomBar from '../components/LowBarre';
import { fetchEvenements, formatDate, formaHeure, Evenement } from '../services/PagePlanInscripService';
import {wd, hd} from '../utils/responsive'


// configure le calendrier en francais

LocaleConfig.locales['fr'] = {
  monthNames: [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ],
  monthNamesShort: [
    'Janv.', 'Févr.', 'Mars', 'Avr.', 'Mai', 'Juin',
    'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'
  ],
  dayNames: [
    'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui"
};
LocaleConfig.defaultLocale = 'fr'; // applique en francais


const PagePlanInscrip = () => {

  // stock les dates sélectionné par l'utilisateur dans le calendrier
  const [selected, setSelected] = useState<string>('');
  // contient la liste des evenements récupérés par l'API
  const [evenements, setEvenements] = useState<Evenement[]>([]);

    // fonction executé au chargement de la page pour récuperer les evenements
  useEffect(() => {
    const getData = async () => {
      const data = await fetchEvenements(); // appel de l'api pour récupérer les evenements
      setEvenements(data); // mise a jour de l'état avec les données
    };

    getData();
  }, []);

    // gère la selection des dates dans le calendrier, 
  const handleDayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
  };

    // genere le style dots, couleurs sur les dates dans le calendrier
 const getMarkedDates = () => {
  const markings: { [key: string]: any } = {};

  evenements.forEach(event => {
    const dateStr = new Date(event.date_debut).toISOString().split('T')[0];

    if (!markings[dateStr]) {
      markings[dateStr] = { dots: [] };
    }

    markings[dateStr].dots.push({
      color: event.couleur || event.couleursecondaire,
    });
  });

  // marque spécial pour la date séléctioner avec la couleur choisis
  if (selected) {
    if (!markings[selected]) markings[selected] = {};
    markings[selected].selected = true;
    markings[selected].selectedColor = 'black';
    markings[selected].selectedTextColor = 'white';
  }

  return markings;
};


  return (
    <SafeAreaView style={styles.safeArea}>
      {/* import du drawer */}
      <DrawerButton />

      {/* affiche du calendrier avec marquage des dates et gestions des clics */}
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress} // pour clique sur une date
        markedDates={getMarkedDates()} // dates marquées des evenements
        markingType="multi-dot" // plusieurs evenements par jours - multi-dot
      />

      {/* affichage des cartes pour chaques événements */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {evenements.map(event => (
          <TouchableOpacity
            key={event.id}
            style={[styles.eventCard, { backgroundColor: event.couleur }]}
            activeOpacity={0.8}
          >
            <View style={styles.textContainer}>
              <Text style={styles.titreEvent}>{event.titre}</Text>
              <Text style={styles.dateHeure}>
                {formatDate(event.date_debut)} - {formatDate(event.date_fin)} {formaHeure(event.heure)}
              </Text>
              <View style={[styles.designEvent, { backgroundColor: event.couleursecondaire }]} />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
 
  {/* import de la nav barre */}
      <BottomBar /> 
    </SafeAreaView> 
  );
};

// styles pour la page, utilisant les fonctions wd et hd pour le responsive

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: hd(12), 
    flex: 1,
    backgroundColor: 'white',
  },
  calendar: {
    borderRadius: wd(2),
    marginBottom: hd(2),
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: wd(2.5), 
  },
  scrollContainer: {
    paddingHorizontal: wd(5),
    paddingBottom: hd(3),
  },
  eventCard: {
    paddingVertical: hd(2),
    borderRadius: wd(4),
    marginBottom: hd(2),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  titreEvent: {
    fontSize: wd(4.5), 
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: wd(8),
  },
  dateHeure: {
    fontSize: wd(3.5),
    color: 'white',
    marginTop: hd(0.5),
    paddingLeft: wd(8),
    padding: wd(2),
  },
  designEvent: {
    position: 'absolute',
    alignSelf: 'baseline',
    bottom: -hd(2),
    height: hd(1.5),
    width: '100%',
    borderBottomLeftRadius: wd(6),
    borderBottomRightRadius: wd(6),
  },
});


export default PagePlanInscrip;
