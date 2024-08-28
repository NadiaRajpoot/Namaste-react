import { useState, useEffect } from "react";
import { API_URL } from "./Constants";

const useRestaurantData = () => {
  // State to hold the list of restaurants and filtered restaurants
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurants] = useState([]);

  // State to hold the menu list data
  const [menuList, setMenuList] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {

      fetchData();
    },10000)
  

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Fetch data from API
      const response = await fetch(API_URL);
      const json = await response.json();
      console.log(json)

      // Extract and set restaurant data
      const restaurants =
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
      setListOfRestaurant(restaurants);
      setfilteredRestaurants(restaurants);

      // Extract and set menu list data
      const menu = json.data.cards[0].card.card.
      gridElements?.infoWithStyle.info
      
      ;
      setMenuList(menu);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Return the states and setters
  return [
    listOfRestaurants,
    filteredRestaurant,
    setfilteredRestaurants,
    menuList,
  ];
};

export default useRestaurantData;
