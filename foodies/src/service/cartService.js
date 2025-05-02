import axios from "axios";

const API_URL = "http://localhost:8081/api/cart";

export const addToCart = async (foodId, token) => {
    try {
        await axios.post(API_URL, { foodId }, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    } catch (error) {
        console.error("Error adding item to cart:", error.response?.data?.message || error.message);
    }
};

export const removeQtyFromCart = async (foodId, token) => {
    try {
        await axios.post(API_URL + '/remove', { foodId }, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
    } catch (error) {
        console.error("Error removing item from cart:", error.response?.data?.message || error.message);
    }
};

export const getCartData = async (token) => {
    try {
        const response = await axios.get(API_URL, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        return response.data.items;
    } catch (error) {
        console.error("Error fetching cart data:", error.response?.data?.message || error.message);
    }
};
