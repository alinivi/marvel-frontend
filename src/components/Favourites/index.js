import React from "react";
import Cookies from "js-cookie";
import CardComic from "../CardComic";
import CardCharacter from "../CardCharacter";
import "./index.css";

const Favourites = () => {
  let favCharacters = Cookies.get("favCharacters");
  if (favCharacters) favCharacters = JSON.parse(favCharacters);
  let favComics = Cookies.get("favComics");
  if (favComics) favComics = JSON.parse(favComics);

  return (
    <div className="container">
      <div>
        <h1>
          <span>Favourite</span> Characters
        </h1>
        <div className="carrousel-fav">
          {favCharacters &&
            favCharacters.map((character, index) => {
              return <CardCharacter key={index} data={character} />;
            })}
        </div>
      </div>

      <div>
        <h1>
          <span>Favourite</span> Comics
        </h1>
        <div className="carrousel-fav">
          {favComics &&
            favComics.map((comic, index) => {
              return <CardComic key={index} data={comic} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
