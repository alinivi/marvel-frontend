import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card";
import Pagination from "../Pagination";
import "./index.css";

const Personnages = ({ search }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const YOUR_API_KEY = "P6Uy9rLZIeh2l7AA";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${YOUR_API_KEY}&skip=${
          (currPage - 1) * 100
        }&name=${search}`
      );
      setCharacters(response.data);
      setMaxPages(parseInt(response.data.count / 100) + 1);
      setIsLoading(false);
    };
    fetchData();
  }, [search, currPage]);

  return isLoading ? (
    <>loading...</>
  ) : (
    <>
      <Pagination
        currPage={currPage}
        maxPages={maxPages}
        setCurrPage={setCurrPage}
      />
      <div className="home-card-wrapper">
        {characters.results &&
          characters.results.map((character, index) => {
            return <Card key={index} data={character} />;
          })}
      </div>
      <Pagination
        currPage={currPage}
        maxPages={maxPages}
        setCurrPage={setCurrPage}
      />
    </>
  );
};

export default Personnages;
