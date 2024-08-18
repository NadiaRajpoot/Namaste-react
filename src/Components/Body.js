import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import useRestaurantData from "../../Utils/useRestaurantData";
import { FaMagnifyingGlass } from "react-icons/fa6";
import HorizontalMenu from "./HorizontalMenu";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import HorizontalCards from "./HorizontalCards";

const Body = () => {
  // State to manage the search text input
  const [searchText, setsearchText] = useState("");
  // State to manage the current slide index for the horizontal scroll
  const [slide, setSlide] = useState(0);
  // State to check if the screen width is medium or larger
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    // Function to determine if the screen is medium or larger
    const checkScreenSize = () => {
      setIsMediumScreen(window.innerWidth >= 768); // Tailwind's md breakpoint is 768px
    };

    // Check screen size on initial render
    checkScreenSize();

    // Add event listener to update screen size on resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Calculate translateX value for horizontal scrolling based on screen size
  const translateValue = isMediumScreen ? slide * 50 : slide * 80;

  // Use custom hook to fetch restaurant data
  const [listOfRestaurants, filteredRestaurant, setfilteredRestaurants] =
    useRestaurantData();

  // Use custom hook to check online status
  const isOnline = useOnlineStatus();
  if (isOnline === false)
    return (
      <h1>
        Oops! Seems like you Don't have internet. Check your internet
        connection!
      </h1>
    );

  // Function to move to the next slide
  const nextSlide = () => {
    if ((slide === -7 && !isMediumScreen) || (slide === -2 && isMediumScreen)) {
      return; // Do nothing if at the end of slides
    } else {
      setSlide(slide - 1);
    }
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    if (slide === 0) return; // Do nothing if at the start of slides
    setSlide(slide + 1);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-11/12 mx-auto my-8">
        {/* Search Restaurant Feature */}
        <div className="flex items-center justify-center">
          <input
            className="md:w-4/12 sm:w-6/12 w-full h-10 ring-1 ring-gray-200 mr-2 shadow-lg outline-none pl-3 rounded-sm hover:border-2 hover:rounded-sm hover:border-red-300"
            type="search"
            placeholder="Search Restaurant..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />

          <button
            className="rounded-md px-2 h-10 w-12 font-medium text-sm my-1 mx-2 bg-red-600 text-white hover:ring-gray-300 hover:ring-2"
            onClick={() => {
              // Filter restaurants based on search text
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredRestaurant);
            }}
          >
            <FaMagnifyingGlass className="ml-2" />
          </button>
        </div>
      </div>

      <div className="mb-12">
        <HorizontalMenu />
      </div>
      <div className="h-[2px] w-11/12 bg-gray-200 m-auto mb-10"></div>
      <div className="w-11/12 m-auto my-6">
        <div className="flex my-4 items-center justify-between">
          <div className="md:text-2xl text-xl font-bold ml-4">
            Top restaurant chains in Mumbai
          </div>
          <div className="flex gap-2">
            <div
              onClick={prevSlide}
              className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
            >
              <FaArrowLeft />
            </div>

            <div
              onClick={nextSlide}
              className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          style={{ transform: `translateX(${translateValue}%)` }}
          className="flex transition-transform duration-500"
        >
          {listOfRestaurants.map((res) => (
            <Link key={res.info.id} to={"restaurants/" + res.info.id}>
              <HorizontalCards resData={res.info} />
            </Link>
          ))}
        </div>
      </div>
      <div className="h-[2px] w-11/12 bg-gray-200 m-auto mb-10"></div>
      <div>
        <div className="md:text-2xl text-xl font-bold md:ml-16 ml-10 my-4">
          Restaurants with online food delivery in Mumbai
        </div>

        <div className="md:w-11/12 w-10/12 m-auto flex flex-wrap gap-2">
          <button
            onClick={() => {
              // Filter restaurants with rating greater than 4.2
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Ratings 4.2+
          </button>
          <button
            onClick={() => {
              // Filter restaurants with discounts
              const filteredList = listOfRestaurants.filter((res) => {
                const aggregatedDiscountInfo =
                  res?.info?.aggregatedDiscountInfoV3;
                if (
                  aggregatedDiscountInfo &&
                  (aggregatedDiscountInfo.header ||
                    aggregatedDiscountInfo.subHeader)
                ) {
                  const tag =
                    (aggregatedDiscountInfo.header || "") +
                    (aggregatedDiscountInfo.subHeader || "");
                  return tag;
                }
                return false;
              });
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Fast Delivery
          </button>

          <button
            onClick={() => {
              // Filter restaurants with SLA time of 25-30 mins
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.sla?.slaString === "25-30 mins"
              );
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Offers
          </button>

          <button
            onClick={() => {
              // Filter restaurants that are pure veg
              const filteredList = listOfRestaurants.filter((res) => {
                const badges = res?.info?.badges?.imageBadges;
                if (badges && badges.length > 0) {
                  const description = badges[0]?.description;
                  return description === "pureveg";
                }
                return false;
              });
              setfilteredRestaurants(filteredList);
            }}
            className="rounded-full px-4 py-1 border border-gray-300 h-10 text-slate-800 font-semibold text-sm my-2 hover:ring-gray-300 hover:ring-2"
          >
            Pure Veg
          </button>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 place-items-center w-11/12 m-auto">
          {filteredRestaurant.map((res) => (
            <Link key={res.info.id} to={"restaurants/" + res.info.id}>
              <RestaurantCard resData={res.info} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
