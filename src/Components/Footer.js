import React from "react";
import logo from "../../foodlogo.png";

const Footer = () => {
  return (
    <div className="px-10 py-14 text-white bg-black">
      <div className="max-w-4xl m-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2">
          {/* Company Logo and Copyright Information */}
          <div className="md:mb-5">
            <div>
              <img className="h-20 w-20" src={logo} alt="Company Logo" />
            </div>
            <div className="mb-5">
              © 2024 Bundl <br /> Technologies Pvt. Ltd
            </div>
          </div>

          {/* Company Information Section */}
          <div className="mb-5">
            <h4 className="font-extrabold text-lg">Company</h4>
            <ul className="flex flex-col gap-4 my-2">
              <li className="text-[#87919a]">Careers</li>
              <li className="text-[#87919a]">About</li>
              <li className="text-[#87919a]">Team</li>
              <li className="text-[#87919a]">Swiggy Instamart</li>
              <li className="text-[#87919a]">Swiggy One</li>
              <li className="text-[#87919a]">Swiggy Genie</li>
            </ul>
          </div>

          {/* Contact Us and Legal Information Sections */}
          <div className="mb-5 flex flex-col gap-8">
            <div>
              <h4 className="font-extrabold text-lg">Contact Us</h4>
              <ul className="flex flex-col gap-4 my-2">
                <li className="text-[#87919a]">Help & Support</li>
                <li className="text-[#87919a]">Partner with us</li>
                <li className="text-[#87919a]">Ride with us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-extrabold text-lg">Legal</h4>
              <ul className="flex flex-col gap-4 my-2">
                <li className="text-[#87919a]">Terms & Conditions</li>
                <li className="text-[#87919a]">Cookie Policy</li>
                <li className="text-[#87919a]">Privacy Policy</li>
                <li className="text-[#87919a]">Investor Relations</li>
              </ul>
            </div>
          </div>

          {/* Delivery Locations Section */}
          <div className="mb-5">
            <h4 className="font-extrabold text-lg">We deliver to:</h4>
            <ul className="flex flex-col gap-4 my-2">
              <li className="text-[#87919a]">Bangalore</li>
              <li className="text-[#87919a]">Gurgaon</li>
              <li className="text-[#87919a]">Hyderabad</li>
              <li className="text-[#87919a]">Delhi</li>
              <li className="text-[#87919a]">Mumbai</li>
              <li className="text-[#87919a]">Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
