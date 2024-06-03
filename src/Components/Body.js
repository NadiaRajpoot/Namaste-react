import restaurant from "../../Utils/mockData";
import restaurant from "../../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="res-container">
      {restaurant.map((res) => {
        return <RestaurantCard key={res.info.id} resData={res.info} />;
      })}
    </div>
  );
};

export default Body;
