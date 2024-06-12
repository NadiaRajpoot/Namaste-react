import restaurant from "../../Utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );

    setfilteredRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(listOfRestaurants);
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="filter">
        {/* Top Rated Restaurant Button Faeture */}
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = restaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>

        {/* Search Restaurant Feature  */}

        <div className="search-box">
          <input
            type="Search"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="search-button filter-button"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res.info} />;
        })}
      </div>
    </>
  );
};

export default Body;
