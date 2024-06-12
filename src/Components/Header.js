import logo from "../../foodlogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleButton, setToggleButton] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
        <button
          class="btn filter-button"
          onClick={() => {
            toggleButton === "Login"
              ? setToggleButton("Logout")
              : setToggleButton("Login");
          }}
        >
          {toggleButton}
        </button>
      </div>
    </div>
  );
};

export default Header;
