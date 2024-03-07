import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

//1.header
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnNameReact === "LOGIN"
                ? setBtnNameReact("LOGOUT")
                : setBtnNameReact("LOGIN")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
