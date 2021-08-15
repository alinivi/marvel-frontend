import React from "react";

const Pagination = ({ currPage, maxPages, setCurrPage }) => {
  return (
    <div>
      {currPage === 1 ? (
        <>
          <span> {currPage} </span>
          <span onClick={() => setCurrPage(currPage + 1)}> Next </span>
          <span onClick={() => setCurrPage(maxPages)}> Last </span>
        </>
      ) : currPage === maxPages ? (
        <>
          <span onClick={() => setCurrPage(1)}> First </span>
          <span onClick={() => setCurrPage(currPage - 1)}> Previous </span>
          <span>{currPage}</span>
        </>
      ) : (
        <>
          <span onClick={() => setCurrPage(1)}> First </span>
          <span onClick={() => setCurrPage(currPage - 1)}> Previous </span>
          <span>{currPage}</span>
          <span onClick={() => setCurrPage(currPage + 1)}> Next </span>
          <span onClick={() => setCurrPage(maxPages)}> Last </span>
        </>
      )}
    </div>
  );
};

export default Pagination;
