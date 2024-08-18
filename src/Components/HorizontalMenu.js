import React, { useState, useEffect } from "react";
import useRestaurantData from "../../Utils/useRestaurantData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { CDN_URL } from "../../Utils/Constants";
import { Link } from "react-router-dom";

const HorizontalMenu = () => {
  const [slide, setSlide] = useState(0); // State to control the slide position
  const [collectionId, setCollectionId] = useState([]); // State to store collection IDs
  const [, , , menuList] = useRestaurantData(); // Custom hook to fetch restaurant data

  useEffect(() => {
    // Extract collection IDs from the menuList and store them in state
    const ids = menuList.map((item) => {
      const url = item.action.link; // Get the URL from item
      const urlObj = new URL(url); // Create a URL object
      const params = new URLSearchParams(urlObj.search); // Parse query parameters
      return params.get("collection_id"); // Get the collection ID
    });

    setCollectionId(ids); // Update the state with collection IDs
  }, [menuList]); // Re-run this effect when menuList changes

  // Function to handle next slide
  const nextSlide = () => {
    // Prevent moving to the next slide if it's the last one
    if (-(menuList.length - 8) === slide) {
      return false;
    } else {
      setSlide(slide - 3); // Move to the next set of slides
    }
  };

  // Function to handle previous slide
  const prevSlide = () => {
    // Prevent moving to the previous slide if it's the first one
    if (slide === 0) return false;
    setSlide(slide + 3); // Move to the previous set of slides
  };

  return (
    <div className="m-auto w-11/12">
      <div className="flex items-center justify-between">
        <div className="md:text-2xl text-xl font-bold ml-4">
          What's on your mind?
        </div>
        <div className="flex gap-2">
          {/* Previous slide button */}
          <div
            onClick={prevSlide}
            className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
          >
            <FaArrowLeft />
          </div>

          {/* Next slide button */}
          <div
            onClick={nextSlide}
            className="flex justify-center items-center w-7 h-7 bg-[#e2e2e7] rounded-full"
          >
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden">
        {/* Render menu items */}
        {menuList.map((item, index) => (
          <Link
            key={index} // Unique key for each item
            to={`collections/${collectionId[index]}`} // Link to collection based on ID
          >
            <div
              style={{ transform: `translateX(${slide * 100}%)` }} // Slide animation
              className="shrink-0 w-[120px] md:w-[150px] transition-transform duration-500"
            >
              <img src={CDN_URL + item.imageId} alt="menu item" />{" "}
              {/* Image of menu item */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorizontalMenu;
