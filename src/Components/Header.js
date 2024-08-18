import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsCartPlusFill } from "react-icons/bs";
import { FaBars, FaXmark } from "react-icons/fa6";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import logo from "../../foodlogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header
      className={`border-b-white z-20 bg-white sticky top-0 border-2 shadow-lg ${
        !isMenuOpen ? "shadow-lg" : ""
      }`}
    >
      <div className="flex max-w-7xl m-auto justify-between">
        {/* Logo and Location Info */}
        <div className="flex gap-4 items-center text-sm">
          <div>
            <img
              className="md:w-20 w-16 md:ml-8 ml-5 object-cover"
              src={logo}
              alt="Company Logo"
            />
          </div>
          <div className="flex gap-2">
            <span className="font-bold">Other</span>
            <span>Mumbai, Maharashtra India</span>
            <span>
              <IoIosArrowDown
                onClick={showSideMenu}
                color="red"
                className="inline cursor-pointer"
                aria-label="Open side menu"
              />
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="md:flex text-base gap-14 hidden md:gap-8 items-center mr-8">
          <li className="flex gap-x-2 text-slate-700">
            <IoMdSearch className="w-5 h-5" />
            <Link to="/">Search</Link>
          </li>
          <li className="flex gap-x-2 text-slate-700">
            <IoIosInformationCircleOutline className="w-5 h-5" />
            <Link to="/about">About Us</Link>
          </li>
          <li className="flex gap-x-2 text-slate-700">
            <BiSolidOffer className="w-5 h-5" />
            <Link to="/offers">Offers</Link>
          </li>
          <li className="flex gap-x-2 text-slate-700">
            <IoHelpBuoyOutline className="w-5 h-5" />
            <Link to="/help">Help</Link>
          </li>
          <li className="flex gap-x-2 text-slate-700">
            <FaRegUser className="w-5 h-5" />
            <Link to="/signin">Sign In</Link>
          </li>
          <Link to="/cart">
            <li className="flex gap-x-2 text-slate-700">
              <div className="relative">
                <BsCartPlusFill className="w-5 h-5" />
                <div className="absolute bottom-4 left-3 flex items-center justify-center w-4 h-4 bg-red-600 text-white text-xs rounded-full">
                  {cartItems.length}
                </div>
              </div>
              Cart
            </li>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-4 text-red-600 mr-5">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden shadow-lg w-full gap-8 flex flex-col text-base pt-6 h-screen px-2 bg-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <IoMdSearch className="w-5 h-5" />
          <Link to="/">Search</Link>
        </li>
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <IoIosInformationCircleOutline className="w-5 h-5" />
          <Link to="/about">About Us</Link>
        </li>
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <BiSolidOffer className="w-5 h-5" />
          <Link to="/offers">Offers</Link>
        </li>
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <IoHelpBuoyOutline className="w-5 h-5" />
          <Link to="/help">Help</Link>
        </li>
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <BsCartPlusFill className="w-5 h-5" />
          <Link to="/cart">Cart</Link>
        </li>
        <li className="flex gap-x-2 ml-4 text-slate-700">
          <FaRegUser className="w-5 h-5" />
          <Link to="/signin">Sign In</Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
