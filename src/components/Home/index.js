import React from "react";

const Home = ({ isLoading, characters, comics }) => {
  return isLoading ? (
    <div>data is loading</div>
  ) : (
    <div>
      <div>
        <h2>Characters</h2>
        {characters.results &&
          characters.results.map((character, index) => {
            return (
              <img
                key={index}
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              />
            );
          })}
      </div>

      <div>
        <h2>Comics</h2>
        {comics.results &&
          comics.results.map((comic, index) => {
            return (
              <img
                key={index}
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
