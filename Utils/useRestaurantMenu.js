import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

const useRestaurantMenu = (resId) => {
  const [menuInfo, setMenuInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setMenuInfo(json.data);
  };

  return menuInfo;
};

export default useRestaurantMenu;
