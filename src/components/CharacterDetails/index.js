import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CardComic from "../CardComic";
import "./index.css";

const CharacterDetails = () => {
  const params = useParams();
  const location = useLocation();
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-imitation-backend.herokuapp.com/comics/${params.id}`
      );
      setComics(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);
  return isLoading ? (
    <>loading...</>
  ) : (
    <div>
      <h1>
        Comics related to <span>{location.state.name}</span>
      </h1>
      <div className="home-card-wrapper">
        {comics.comics &&
          comics.comics.map((comic, index) => {
            return <CardComic key={index} data={comic} />;
          })}
      </div>
    </div>
  );
};

export default CharacterDetails;
