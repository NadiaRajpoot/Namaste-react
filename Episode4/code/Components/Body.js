import restaurant from "../Utils/mockData";
import restaurantList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className="res-container">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.id}  {...restaurant}/>
      })}
       
        <RestaurantCard resData = {restaurant[0]}/>
        
        
      </div>
    );
  };

  export default Body;