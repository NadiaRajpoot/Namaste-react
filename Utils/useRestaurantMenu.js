import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

const useRestaurantMenu = (resId) => {
  // State to hold the menu information
  const [menuInfo, setMenuInfo] = useState(null);

  // useEffect hook to fetch data when the component mounts or when resId changes
  useEffect(() => {
    fetchData();
  }, [resId]); // Added resId as a dependency to refetch data when resId changes

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      // Fetch data from the API using the restaurant ID
      const response = await fetch(MENU_API + resId.resId);
      const json = await response.json();

      // Set the fetched data to state
      setMenuInfo(json.data);
    } catch (err) {
      // Log error to console, since returning JSX in this context won't work
      console.error("Failed to fetch menu data:", err);
    }
  };

  // Return the menu information
  return menuInfo;
};

export default useRestaurantMenu;
