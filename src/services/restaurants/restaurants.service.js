import camelize from "camelize";
import { RestaurantCard } from "../../features/restaurants/components/restaurant-info-card.styles";
import { mocks, mockImages } from "./mock";

export const restaurantRequest = (location = "37.7749295,-122.4194155") => {
    return new Promise((resolve, reject) => {
        let mock = mocks[location];

        if (!mock) {
            reject("not found");
        }
        resolve(mock);
    });
};


export const transformRequest = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {

        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
        });
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};

