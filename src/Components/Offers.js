import React, { useEffect } from "react";
import useRestaurantData from "../../Utils/useRestaurantData";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const Offers = () => {
  // Using custom hook useRestaurantData to fetch live restaurant data from the API
  const [listOfRestaurants, filteredRestaurant, setfilteredRestaurants] =
    useRestaurantData();

  // Filtering the list of restaurants to only include those with offers (i.e., discounts)
  const Offerlist = listOfRestaurants.filter((res) => {
    const { aggregatedDiscountInfoV3 } = res.info;
    if (
      aggregatedDiscountInfoV3?.header ||
      aggregatedDiscountInfoV3?.subHeader
    ) {
      // Creating a tag from the discount header and subheader if they exist
      const tag =
        (aggregatedDiscountInfoV3.header || "") +
        (aggregatedDiscountInfoV3.subHeader || "");
      return tag; // Returns the tag if either exists
    }
    return false; // Otherwise, exclude this restaurant
  });

  // Updating the filtered restaurants state with the Offerlist whenever it changes
  useEffect(() => {
    setfilteredRestaurants(Offerlist);
  }, [Offerlist]); // Added Offerlist as a dependency to ensure it updates when the list changes

  return (
    <div className="w-full">
      <div className="flex justify-between bg-gradient-to-t from-60% from-[#d3c8f6] rounded-b-3xl">
        {/* Section with a heading and a line decoration */}
        <div className="h-36 mt-[70px] ml-28 justify-end">
          <h1
            className="text-5xl font-extrabold text-[rgba(2, 6, 12, 0.75)] 
          tracking-tight"
          >
            Restaurants Near Me
          </h1>
          {/* Decorative SVG line below the heading */}
          <div className="w-32 mt-2">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 78 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.25939C27 -0.240624 53.5 -0.2406 77 4.25939"
                stroke="#FF5200"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        {/* Image section next to the heading */}
        <div>
          <img
            className="mr-56 h-80 object-cover"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1002,h_600/v1678428358/portal/m/seo_web/dweb_header.png"
            alt=""
          />
        </div>
      </div>
      
      {/* Introduction section to the offers */}
      <div className="ml-10 mt-12">
        <h1 className="ml-6 my-6 font-extrabold text-3xl">
          Restaurants With Great Offers Near Me
        </h1>
        <div className="rounded-lg w-11/12 border border-gray-300 px-4 py-8 mb-8">
          <h1 className="text-xl my-4 font-extrabold text-[#676a6d]">
            Get the best offers on the food from top restaurants near you
          </h1>
          <p className="text-[#676a6d]">
            Get ready for a scrumptious adventure filled with unbeatable offers
            on your favourite foods and restaurants. Whether you're in the mood
            for a cheesy pizza, a sizzling burger, or a delightful bowl of
            pasta, now is the perfect time to satisfy your cravings while saving
            big. <br />
            <br />
            All the top-rated restaurants and popular eateries are rolling out
            enticing deals and discounts that are too good to resist. From
            mouthwatering buy-one-get-one-free offers to irresistible combo
            meals, there's something for everyone on Swiggy to relish without
            breaking the bank.
          </p>
        </div>
      </div>
      
      {/* Displaying the list of restaurants with offers */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 place-items-center w-11/12 m-auto">
        {Offerlist.map((res) => {
          return (
            // Each restaurant card is wrapped in a Link component for navigation
            <Link key={res.info.id} to={res.info.id}>
              <RestaurantCard resData={res.info}></RestaurantCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Offers;
