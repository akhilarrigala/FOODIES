import axios from "axios";


const API_URL = "http://localhost:8081/api";

export const registerUser = async (data) => {

    try {
        const response = await axios.post(API_URL + '/register', data);
        return response;
    } catch (error) {
        console.log(response.data);
        throw error;
    }

}
export const loginUser = async (data) => {
    try {
      const response = await axios.post(API_URL+'/login', data);
      return response;
    } catch (error) {
      console.error(error.response?.data || error.message);
      throw error;
    }
  };