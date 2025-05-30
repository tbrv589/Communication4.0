import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
// import BottomBar from '../components/LowBarre';

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

const events = [
  {
    title: 'Escape Game',
    color: '#51AFD0',
    dates: ['2025-04-03', '2025-04-04', '2025-04-05', '2025-04-06'],
  },
  {
    title: 'Jeudis connecté',
    color: '#DBE18D',
    dates: ['2025-04-13', '2025-04-20', '2025-04-27'],
  },
  {
    title: 'caca popo',
    color: '#51D077',
    dates: ['2025-04-09', '2025-04-10'],
  },
  {
    title: 'partagé partagé',
    color: '#EB787A',
    dates: ['2025-04-29', '2025-04-30'],
  },
];

const PagePlanInscrip: React.FC = () => {
  const [selected, setSelected] = useState<string>('');

  const handleDayPress = (day: { dateString: string }) => {
    setSelected(day.dateString);
  };

  const getMarkedDates = () => {
    const markings: { [key: string]: any } = {};

    events.forEach(event => {
      event.dates.forEach(date => {
        markings[date] = {
          selected: true,
          selectedColor: event.color,
          disableTouchEvent: false,
        };
      });
    });

    if (selected) {
      markings[selected] = {
        ...(markings[selected] || {}),
        selected: true,
        selectedColor: 'black',
        disableTouchEvent: true,
      };
    }

    return markings;
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>

      <Calendar
        style={styles.Calendar}
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        theme={{}}
      />

      <TouchableOpacity style={styles.Event1} >
        <Text style={styles.textEvent}>Escape Game</Text>
        <Text style={styles.DateEvent}>03-06 Avril 2025</Text>
        <Text style={styles.horaireEvent}>8:00 - 12:00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Event2}>
        <Text style={styles.textEvent}>Jeudis connecté</Text>
        <Text style={styles.DateEvent}>13-27 Avril 2025</Text>
        <Text style={styles.horaireEvent}>8:00 - 12:00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Event3}>
        <Text style={styles.textEvent}>caca popo</Text>
        <Text style={styles.DateEvent}>09-10 Avril 2025</Text>
        <Text style={styles.horaireEvent}>8:00 - 12:00</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Event4}>
        <Text style={styles.textEvent}>partagé partagé</Text>
        <Text style={styles.DateEvent}>29-30 Avril 2025</Text>
        <Text style={styles.horaireEvent}>8:00 - 12:00</Text>
      </TouchableOpacity>

      {/* <BottomBar /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    paddingTop: 50,
  },
  Calendar: {
    borderRadius: 50,
  },
  Event1: {
    backgroundColor: '#51AFD0',
    height: 72,
    width: 315,
    borderRadius: 10,
    left: 35,
    top: 25,
    marginVertical: 10
  },
  Event2: {
    backgroundColor: '#DBE18D',
    height: 72,
    width: 315,
    borderRadius: 10,
    left: 35,
    top: 25,
    marginVertical: 10
  },
  Event3: {
    backgroundColor: '#51D077',
    height: 72,
    width: 315,
    borderRadius: 10,
    left: 35,
    top: 25,
    marginVertical: 10
  },
  Event4: {
    backgroundColor: '#EB787A',
    height: 72,
    width: 315,
    borderRadius: 10,
    left: 35,
    top: 25,
    marginVertical: 10
  },
  textEvent: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'cochin',
    left: 45,
    top: 15,
    position: 'absolute'
  },
  DateEvent: {
    fontSize: 11,
    top: 45,
    left: 45,
    position: 'absolute'
  },
  horaireEvent: {
    fontSize: 11,
    top: 45,
    left: 160,
    position: 'absolute'
  },
});

export default PagePlanInscrip;
