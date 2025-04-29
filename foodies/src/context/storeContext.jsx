import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { fetchFoodList } from "../service/foodService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});

    // Increase the quantity of a food item in the cart
    const increaseQty = (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: (prev[foodId] || 0) + 1,
        }));
    };

    // Decrease the quantity of a food item in the cart
    const decreaseQty = (foodId) => {
        setQuantities((prev) => ({
            ...prev,
            [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
        }));
    };

    // Remove a food item from the cart
    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[foodId];
            return updatedQuantities;
        });
    };

    // Fetch food list on initial load
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchFoodList();
                setFoodList(data);
            } catch (error) {
                console.error("Error fetching food list:", error);
            }
        };
        loadData();
    }, []);

    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};
