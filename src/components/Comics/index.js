import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../Card";
import Pagination from "../Pagination";

const Comics = ({ search }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const YOUR_API_KEY = "P6Uy9rLZIeh2l7AA";

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${YOUR_API_KEY}&skip=${
          (currPage - 1) * 100
        }&title=${search}`
      );
      setComics(response.data);
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
        {comics.results &&
          comics.results.map((comic, index) => {
            return <Card key={index} data={comic} />;
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

export default Comics;
