import { useState, useEffect } from "react";
import { API_URL } from "./Constants";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setfilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return [listOfRestaurants, filteredRestaurant, setfilteredRestaurants];
};

export default useRestaurantData;
