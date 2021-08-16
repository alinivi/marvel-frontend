import React from "react";
import "./index.css";

const Home = ({ isLoading, characters, comics }) => {
  return isLoading ? (
    <div>data is loading</div>
  ) : (
    <div className="home">
      <div>
        <h2>Characters</h2>
        <div className="carrousel">
          {characters.results &&
            characters.results.map((character, index) => {
              return (
                <img
                  key={index}
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt="character"
                />
              );
            })}
        </div>
      </div>

      <div>
        <h2>Comics</h2>
        <div className="carrousel">
          {comics.results &&
            comics.results.map((comic, index) => {
              return (
                <img
                  key={index}
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt="comic"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
