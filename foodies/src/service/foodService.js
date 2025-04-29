import axios from "axios";

const API_URL = "http://localhost:8081/api/foods";

export const fetchFoodList = async () => {
    const response = await axios.get(API_URL);
    try{
       return response.data;
    }catch (error){
        console.log(response.data);
        throw error;
    }
     
}

export const fetchFoodDetails = async (id) => {
    try {
        const response = await axios.get(API_URL+'/'+id);
        return response.data;
    } catch (error) {
        console.log('Error fetching food details:', error);
        throw error;
    }
        
        
    }