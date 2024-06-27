import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import useRestaurantData from "../../Utils/useRestaurantData";

const Body = () => {
  const [searchText, setsearchText] = useState("");

  // used custom hook useResataurantData to fetch live Data from API.
  const [listOfRestaurants, filteredRestaurant, setfilteredRestaurants] =
    useRestaurantData();

  //used custom hook displaying Internet connection relted issues for better user experience.
  const isOnline = useOnlineStatus();
  if (isOnline === false)
    return (
      <h1>
        Oops! Seems like you Don't have internet. check Your internet
        Connection!!
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        {/* Top Rated Restaurant Button Faeture */}
        <button
          className="filter-button"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.1
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
          return (
            <Link key={res.info.id} to={"restaurants/" + res.info.id}>
              <RestaurantCard resData={res.info}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
