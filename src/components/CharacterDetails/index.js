import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardComic from "../CardComic";

const CharacterDetails = () => {
  const params = useParams();
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
