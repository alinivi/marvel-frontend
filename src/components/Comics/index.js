import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card";

const Comics = ({ search }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const YOUR_API_KEY = "P6Uy9rLZIeh2l7AA";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${YOUR_API_KEY}&title=${search}`
      );
      setComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);
  return isLoading ? (
    <>loading...</>
  ) : (
    <>
      <div className="home-card-wrapper">
        {comics.results &&
          comics.results.map((comic, index) => {
            return <Card key={index} data={comic} />;
          })}
      </div>
    </>
  );
};

export default Comics;
