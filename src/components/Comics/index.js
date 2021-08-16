import React, { useState, useEffect } from "react";
import axios from "axios";

import CardComic from "../CardComic";
import Pagination from "../Pagination";

const Comics = ({ search }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currPage, setCurrPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setComics([]); //need to do this as setComics takes some time to update and therefore the function that checks if the comic is a favorite will not function properly (it will check based on the pre-update list of comics)
      const response = await axios.get(
        `https://marvel-imitation-backend.herokuapp.com/comics?skip=${
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
            return <CardComic key={index} data={comic} />;
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
