import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";
import { useContext, useEffect, useState } from "react";
import ShowButtonContext from "../../Utils/ShowButtonContext";
const RestaurantCatagory = ({ data }) => {
  const {showButton, setShowButton} = useContext(ShowButtonContext);

  const [showItem, setShowItem] = useState(false);
   useEffect(()=>{

    setShowButton(true)
   },[])
  const handleShowItem = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="lg:w-8/12 md:w-8/12 w-10/12 bg-gray m-auto my-4 shadow-lg p-4 ">
      <div className="flex justify-between" onClick={handleShowItem}>
        <span className="font-semibold lg:text-lg  text-[#212529] text-sm ">
          {data.title === data.title.toUpperCase()
            ? data.title.charAt(0).toUpperCase() +
              data.title.toLowerCase().slice(1)
            : data.title}
          ({data.itemCards.length})
        </span>
        <span>
          <IoIosArrowDown className="text-lg" />
        </span>
      </div>
      {showItem ? <ItemList items={data.itemCards} showItem={showItem} /> : ""}
    </div>
  );
};

export default RestaurantCatagory;
