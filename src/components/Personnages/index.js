import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import "./index.css";

const Personnages = ({ search }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const YOUR_API_KEY = "P6Uy9rLZIeh2l7AA";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${YOUR_API_KEY}&name=${search}`
      );
      setCharacters(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <>loading...</>
  ) : (
    <div className="home-card-wrapper">
      {characters.results &&
        characters.results.map((character, index) => {
          return <Card key={index} data={character} />;
        })}
    </div>
  );
};

export default Personnages;
