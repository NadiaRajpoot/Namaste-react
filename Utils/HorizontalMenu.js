import React, { useState,useEffect } from "react";
import useRestaurantData from "../../Utils/useRestaurantData";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { CDN_URL } from "../../Utils/Constants";
import { Link , useParams} from "react-router-dom";

;
const HorizontalMenu = () => {
  const [slide, setSlide] = useState(0);
  const [collectionId, setCollectionId] = useState(null);
  const [, , , menuList] = useRestaurantData();

  useEffect(() => {
    // Extract collection IDs from the menuList and store them in state
    const ids = menuList.map((item) => {
      const url = item.action.link; // Use the item's actual link
      const urlObj = new URL(url);
      const params = new URLSearchParams(urlObj.search);
      return params.get('collection_id'); // Return the collection ID
    });
 
    setCollectionId(ids); // Set all collection IDs to state
  }, [menuList]); // 
 

  const nextSlide = () => {
    if (-(menuList.length - 8) === slide) {
      return false;
    } else {
      setSlide(slide - 3);
    }
  };
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide + 3);
  };

  return (
    <div className="m-auto w-11/12">
      <div className="flex items-center justify-between">
        <div className="md:text-2xl text-xl font-bold ml-4">
          What's on your mind?
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
      <div className="flex overflow-hidden">
  {menuList.map((item, index) => (
    <Link
      key={index} // Key should be on the Link component
      to={`collections/${collectionId[index]}`}
    >
      <div
        style={{ transform: `translateX(${slide * 100}%)` }}
        className="shrink-0 w-[120px] md:w-[150px] transition-transform duration-500"
      >
        <img src={CDN_URL + item.imageId} alt="" />
      </div>
    </Link>
  ))}
</div>

    </div>
  );
};

export default HorizontalMenu;
