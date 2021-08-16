import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Home = ({ isLoading, characters, comics }) => {
  return isLoading ? (
    <div>data is loading</div>
  ) : (
    <div className="home">
      <Link to="personnages" className="link">
        <div className="container-carrousel">
          <h1>
            <span>Explore</span> the characters
          </h1>
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
      </Link>

      <Link to="comics" className="link">
        <div className="container-carrousel">
          <h1>
            <span>Explore</span> the comics
          </h1>
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
      </Link>
    </div>
  );
};

export default Home;
