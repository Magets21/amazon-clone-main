import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import axios from "axios";
import { color } from "@mui/system";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PlaceIcon from "@mui/icons-material/Place";
import "./Header.css";

// Location API_KEY = eki4XPQT261oub3zmvRM

const componentDidMount = () => {};

function Header() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const [{ basket, user }, dispatch] = useStateValue();

  // signed up http://ipinfo.io and click Getting started, get full url to fetch data (city and zipcode for my case)
  // https://ipinfo.io/json?token=3885cd751ec8d4
  const [city, setCity] = useState();
  const [postal, setPostal] = useState();

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json?token=3885cd751ec8d4")
      .then((response) => {
        setCity(response.data.city);
        setPostal(response.data.postal);
      });
  }, []);

  const handleAuthenticaton = () => {
    if (user) {
      //its a method from firebase that signs out a signed in user
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Header Logo"
          onClick={scrollToTop}
        />
      </Link>
      <div className="header__location">
        <PlaceIcon />
        {/* <PersonPinCircleIcon /> */}
      </div>
      <div className="header__option">
        <span className="header__optionLineOne">
          Deliver to {!user ? "Markos" : user?.email}
        </span>
        <span className="header__optionLineTwo">
          {city} {postal}
        </span>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} className="header__clearLink">
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link to="/orders" className="header__clearLink" onClick={scrollToTop}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link
          to="/checkout"
          className="header__clearLink"
          onClick={scrollToTop}
        >
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>

        {/* 
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                0
              </span>
            </div>
          </Link>
         */}
      </div>
    </div>
  );
}

export default Header;
