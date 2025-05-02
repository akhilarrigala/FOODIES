import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { fetchFoodList } from "../service/foodService";
import { addToCart, getCartData, removeQtyFromCart } from "../service/cartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token, setToken] = useState("");

    // Increase the quantity of a food item in the cart
    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: (prev[foodId] || 0) + 1,
        }));
        await addToCart(foodId,token);
    };

    // Decrease the quantity of a food item in the cart
    const decreaseQty = async (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
        }));
        await removeQtyFromCart(foodId,token);
    };

    // Remove a food item from the cart (local only)
    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[foodId];
            return updatedQuantities;
        });
    };

    // Load cart data from backend
    const loadCartData = async () => {
        const items = await getCartData(token);
        setQuantities(items);
    };

    // Fetch food list on initial load
    useEffect(() => {
        const loadData = async () => {
            const data = await fetchFoodList();
            setFoodList(data);
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
        };

        loadData();
    }, []);

    // Load cart data when token is set
    useEffect(() => {
        if (token) {
            loadCartData();
        }
    }, [token]);

    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCartData
        
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
