import axios from "axios";

const API_URL = "http://10.0.2.2:1337/api";

export const getAvatarMessage = async () => {
  const res = await axios.get(`${API_URL}/avatar-messages`);
  
return res.data?.data?.[0]?.message || "dialogue non trouve";
};

export const getEcoles = async () => {
  const res = await axios.get(`${API_URL}/page-ecoles?populate=*`);
return res.data?.data || [];
};
