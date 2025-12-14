import axios from "axios";
import toast from "react-hot-toast";


export const imageUpload = async(imageData) => {
  const formData = new FormData();
  formData.append('image', imageData)

  const imgData = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, formData)
  return imgData?.data?.data?.url;
}


export const saveOrUpdateUsers = async(userData) => {
  try {
    const result = await axios.post(`${import.meta.env.VITE_SERVER_API_URL_KEY}/users`, userData)
    return result.data.result;
  } catch (error) {
    console.log(error.message)
    toast.error(error.message)
  }
}