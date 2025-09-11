import axios from "axios"

const API_URL = 'http://10.0.2.2:1337/api'

export const getUIMM = async () => {
    const res = await axios.get(`${API_URL}/UIMM?populate=*`)
    return res.data?.data
}