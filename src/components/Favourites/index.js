import React from "react";
import Cookies from "js-cookie";
import Card from "../Card";

const Favourites = () => {
  let favCharacters = Cookies.get("favCharacters");
  if (favCharacters) favCharacters = JSON.parse(favCharacters);
  let favComics = Cookies.get("favComics");
  if (favComics) favComics = JSON.parse(favComics);
  return (
    <div>
      <div>
        <h2>Favourite Characters</h2>
        <div className="home-card-wrapper">
          {favCharacters &&
            favCharacters.map((character, index) => {
              return <Card key={index} data={character} />;
            })}
        </div>
      </div>
      <div>
        <h2>Favourite Comics</h2>
        <div className="home-card-wrapper">
          {favComics &&
            favComics.map((comic, index) => {
              return <Card key={index} data={comic} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
