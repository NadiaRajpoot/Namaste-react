import { questions } from "../../Utils/mockData";
import React, { useState } from "react";
import Accordian from "./Accordian";

const Help = () => {
  // Initialize state with questions data
  const [data1, setData] = useState(questions);
  console.log(data1); // Log state data for debugging purposes

  return (
    <div className="bg-[#37718e] text-white">
      {/* Header Section */}
      <div className="py-10 px-4 mx-8">
        <h1 className="font-extrabold text-2xl">Help & Support</h1>
        <p className="py-1">Let's take a step ahead and help you better.</p>
      </div>

      {/* Main Content Section */}
      <div className="bg-white ml-6 md:h-[600px] h-[750px] p-10 md:flex gap-8">
        {/* Sidebar Navigation (Visible on medium screens and above) */}
        <div className="bg-[#edf1f7] py-8 pl-10 w-4/12 hidden md:block">
          <ul className="text-slate-700 cursor-pointer">
            <li className="bg-white pl-8 py-6 pr-1">Partner Onboarding</li>
            <li className="hover:bg-white pl-8 py-6">Legal</li>
            <li className="hover:bg-white pl-8 py-6">FAQs</li>
            <li className="hover:bg-white pl-8 py-6">Instamart Onboarding</li>
          </ul>
        </div>

        {/* Main Content (Accordions) */}
        <div className="md:pt-10 md:px-10 w-full">
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <div className="text-xl text-black font-extrabold px-4">
              Partner Onboarding
            </div>

            {/* Render Accordion components for each question */}
            {data1.map((currElem) => {
              const { id } = currElem;
              return <Accordian key={id} {...currElem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
