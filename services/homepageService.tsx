import axios from "axios"

const API_URL = "http://10.0.2.2:1337/api"

//fonction asynchrone pour recuperer le message de l'avatar pour PageEcole depuis strapi
export const getAvatarMessage = async() => {

    const res = await axios.get(`${API_URL}/avatar-messages`)

      // si aucune donnée trouvé retourne ce message: 
    return res.data?.data?.[0]?.messageHomeScreen || 'dialogue non trouvé'

}  