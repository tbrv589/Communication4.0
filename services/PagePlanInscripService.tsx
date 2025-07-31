import axios from 'axios'

// type qui décrit la structure d'un événement avec ses propriétés essentielles
export type Evenement = {
  id: number
  titre: string
  date_debut: string
  date_fin: string
  heure: string
  couleur: string
  couleursecondaire: string
};

// tableaux de couleurs pour les différentes événements affichés
const couleursEvenement = ['#51AFD0', '#DBE18D', '#51D077', '#EB787A']
const couleursEvenementSecondaire = ['#25638D', '#879012', '#0A5219', '#842022']
// fonction asynchrone qui recupere les événements sur strapi


export const fetchEvenements = async (): Promise<Evenement[]> => {
  try {
    const res = await axios.get('http://10.0.2.2:1337/api/evenements')
    const data = res.data.data;

    return data.map((item: any, index: number) => ({
      id: item.id,
      titre: item.Titre,
      date_debut: item.Date,
      date_fin: item.Date,
      heure: item.heure,
      couleur: couleursEvenement[index % couleursEvenement.length],
      couleursecondaire: couleursEvenementSecondaire[index % couleursEvenementSecondaire.length],
    }));
  } catch (err) {
    console.error('Erreur récupération événements :', err);
    return []; // retourne un tableau vide si y'a une erreur
  }
};

// fonction pour formater une date ISO en chaine de caratere formatée jour-mois-annee
export const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`
}

export const formaHeure = (heure: string) => heure.slice(0, 5).replace(':', 'h')
