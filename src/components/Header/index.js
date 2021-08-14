import React from "react";
import logo from "../../assets/logo.png";
import "./index.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({ setSearch }) => {
  let location = useLocation();
  return (
    <div className="banner">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      {(location.pathname === "/personnages" ||
        location.pathname === "/comics") && (
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder={
              location.pathname === "/comics"
                ? "Search comic"
                : "Search character"
            }
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      )}
      <div>
        <Link to="/personnages">
          <button>Personnages</button>
        </Link>
        <Link to="/comics">
          <button>Comics</button>
        </Link>
        <Link to="/favourites">
          <button>Favourites</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;