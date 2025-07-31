import axios from "axios"

const API_URL = 'http://10.0.2.2:1337/api'

//fonction asynchrone pour recuperer le message de l'avatar pour PageEcole depuis strapi
export const getAvatarMessage = async () => {
  const res = await axios.get(`${API_URL}/avatar-messages`)
  // si aucune donnée trouvé retourne ce message: 
  return res.data?.data?.[0]?.messagePageEcole || 'dialogue non trouve'
};

//fonction asynchrone pour recuperer la liste des écoles depuis strapi
export const getEcoles = async () => {
  const res = await axios.get(`${API_URL}/page-ecoles?populate=*`)
  return res.data?.data
};
