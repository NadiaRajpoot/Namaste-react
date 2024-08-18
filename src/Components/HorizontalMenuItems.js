import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useParams } from 'react-router-dom';
import UseHorizontalMenuItemData from '../../Utils/UseHorizontalMenuItemData';

const HorizontalMenuItems = () => {
  // Extracting the restaurant menu ID from the URL parameters
  const { resMenuId } = useParams();
  console.log(resMenuId);

  // Using custom hook UseHorizontalMenuItemData to fetch menu items and restaurant info
  const [horizonatlMenuInfo, horizonatlMenuRestaurantInfo] = UseHorizontalMenuItemData(resMenuId);
console.log(horizonatlMenuInfo)
  return (
    <div className=''>
      {/* Section for the title and description of the menu */}
      <div className='px-[50px] pt-14'>
        <h1 className='md:text-4xl font-bold my-3 text-xl'>
          {horizonatlMenuInfo[0]?.card?.card?.title ? horizonatlMenuInfo[0]?.card?.card?.title : ""}
        </h1>
        <p className='md:text-lg text-slate-500 text-sm'>
          {horizonatlMenuInfo[0]?.card?.card?.description}
        </p>
        
        {/* Filter buttons for filtering restaurants based on criteria */}
        <div className="flex flex-wrap gap-2 my-2">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.0
              );
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Ratings 4.0+
          </button>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => console.log(parseInt(res?.info?.costForTwo.slice(0, 4)))
              );
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Less than 300
          </button>
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.0
              );
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Pure Veg
          </button>
        </div>
        
        {/* Section title for the list of restaurants */}
        <div className='font-extrabold text-xl px-1'>Restaurants to explore</div>
      </div>
      
      {/* Grid layout for displaying the list of restaurants */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 pl-4 place-items-center w-11/12 m-auto">
        {horizonatlMenuRestaurantInfo.map((item) => {
          return (
            <RestaurantCard key={item?.card?.card?.info?.id} resData={item?.card?.card?.info} />
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalMenuItems;
