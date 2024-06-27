import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuInfo = useRestaurantMenu(resId);

  if (menuInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwo } =
    menuInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>

      <ul>
        {itemCards.map((item) => {
          return <li key={item.card.info.id}>{item.card.info.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
