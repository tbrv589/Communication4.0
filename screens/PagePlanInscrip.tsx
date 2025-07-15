import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import axios from 'axios';
import { any } from 'three/tsl';
import DrawerButton from '../components/DrawerDesignButton';
import { View } from '@react-three/drei';


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
LocaleConfig.defaultLocale = 'fr';



type Evenement = {
  id: number;
  titre: string;
  date_debut: string;
  date_fin: string;
  heure: string;
  couleur: string;
};

const PagePlanInscrip: React.FC = () => {
  const [selected, setSelected] = useState<string>('');
  const [evenements, setEvenements] = useState<Evenement[]>([]);

  useEffect(() => {
    const fetchEvenements = async () => {
      try {
        const res = await axios.get('http://10.0.2.2:1337/api/evenements');
        console.log('📦 Données brutes reçues :', res.data);



        const couleursEvenement = ['#51AFD0', '#DBE18D', '#51D077', '#EB787A']

        const data = res.data.data;

        const formatted = data.map((item: any, index: number) => ({
          id: item.id,
          titre: item.Titre,
          date_debut: item.Date,
          date_fin: item.Date,
          heure: item.heure,
          couleur: couleursEvenement[index % couleursEvenement.length]
        }));
  
        console.log('Événements récupérés:', formatted);
        setEvenements(formatted);
      } catch (err) {
        console.error('Erreur récupération événements :', err);
      }
    };

    fetchEvenements();
  }, []);

  const handleDayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
  };

  const getMarkedDates = () => {
    const markings: { [key: string]: any } = {};

    evenements.forEach(event => {
      const start = new Date(event.date_debut);
      const end = new Date(event.date_fin);
      const current = new Date(start);

      while (current <= end) {
        const dateStr = current.toISOString().split('T')[0];
        markings[dateStr] = {
          selected: true,
          selectedColor: event.couleur,
          disableTouchEvent: false
        };
        current.setDate(current.getDate() + 1);
      }
    });

    if (selected) {
      markings[selected] = {
        ...(markings[selected] || {}),
        selected: true,
        selectedColor: 'white',
        disableTouchEvent: true
      };
    }

    return markings;
  };

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;
  };

  return (

    
    <SafeAreaView style={styles.safeArea}>

     <DrawerButton />

      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        markingType="period"
        theme={{}}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {evenements.map((event) => (
          <TouchableOpacity
            key={event.id}
            style={[styles.eventBlock, { backgroundColor: event.couleur || 'black' }]}
          >
            <Text style={styles.textEvent}>{event.titre}</Text>
            <Text style={styles.dateEvent}>
              {formatDate(event.date_debut)} - {formatDate(event.date_fin)}
            </Text>
            <Text style={styles.horaireEvent}>{event.heure}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: 100,
    flex: 1,
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  eventBlock: {
    height: 72,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  textEvent: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dateEvent: {
    fontSize: 12,
    color: 'white',
    marginTop: 5,
  },
  horaireEvent: {
    fontSize: 12,
    color: 'white',
  },
});

export default PagePlanInscrip;
