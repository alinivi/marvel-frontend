import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../Card";

const CharacterDetails = () => {
  const params = useParams();
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const YOUR_API_KEY = "P6Uy9rLZIeh2l7AA";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${params.id}?apiKey=${YOUR_API_KEY}`
      );
      setComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);
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

export default CharacterDetails;
