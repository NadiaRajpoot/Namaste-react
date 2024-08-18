import React, { useState } from "react"; // Importing React and useState hook
import { IoIosArrowDown } from "react-icons/io"; // Importing an icon from react-icons

const Accordian = ({ title, description }) => {
  const [showItem, setShowItem] = useState(false); // State to track if the item is expanded

  const toggleItem = () => {
    setShowItem(!showItem); // Toggles the visibility of the description
  };

  return (
    <div>
      {/* Container for the accordion item */}
      <div
        onClick={toggleItem}
        className="cursor-pointer flex justify-between p-4"
      >
        {/* Title section that triggers the toggle function on click */}
        <span className="text-black font-bold">{title}</span>
        <span>
          <IoIosArrowDown size={20} color="black" />
          {/* Arrow icon indicating the expandable nature of the accordion */}
        </span>
      </div>
      {showItem && (
        <div className="px-4 pb-2">
          {/* Description that shows only when the item is expanded */}
          <p className="text-black">{description}</p>
        </div>
      )}
      <hr className="bg-gray-300 " />
      {/* Divider line below each accordion item */}
    </div>
  );
};

export default Accordian;
