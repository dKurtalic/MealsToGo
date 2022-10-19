import { useState, useEffect, useMemo, createContext } from "react";
import { restaurantRequest, transformRequest } from "./restaurants.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    function retrieveRestaurants() {
        setIsLoading(true);
        setTimeout(() => {
            restaurantRequest()
                .then(transformRequest)
                .then((res) => {
                    setIsLoading(false);
                    setRestaurants(res);
                })
                .catch((er) => {
                    setIsLoading(false);
                    setError(er)
                });
        }, 2000);
    };
    useEffect(() => {
        retrieveRestaurants();
    }, []);
    return (
        <RestaurantContext.Provider value={{
            restaurants: restaurants,
            isLoading,
            error
        }}>
            {children}
        </RestaurantContext.Provider>
    );
};