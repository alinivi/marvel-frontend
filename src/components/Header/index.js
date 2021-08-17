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
      {location.pathname === "/personnages" ||
      location.pathname === "/comics" ? (
        <input
          type="text"
          placeholder={
            location.pathname === "/comics"
              ? "Search comic"
              : "Search character"
          }
          onChange={(event) => setSearch(event.target.value)}
        />
      ) : (
        <div className="no-search-input"></div>
      )}
      <div className="banner-buttons">
        <Link to="/personnages">
          <button>Characters</button>
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
