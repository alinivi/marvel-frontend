import React from "react";
import "./index.css";

const Pagination = ({ currPage, maxPages, setCurrPage }) => {
  return (
    <div>
      {currPage === 1 ? (
        <div className="pagination">
          <span> Page {currPage} </span>
          <span onClick={() => setCurrPage(currPage + 1)}> Next </span>
          <span onClick={() => setCurrPage(maxPages)}> Last </span>
        </div>
      ) : currPage === maxPages ? (
        <div className="pagination">
          <span onClick={() => setCurrPage(1)}> First </span>
          <span onClick={() => setCurrPage(currPage - 1)}> Previous </span>
          <span>Page {currPage}</span>
        </div>
      ) : (
        <div className="pagination">
          <span onClick={() => setCurrPage(1)}> First </span>
          <span onClick={() => setCurrPage(currPage - 1)}> Previous </span>
          <span>Page {currPage}</span>
          <span onClick={() => setCurrPage(currPage + 1)}> Next </span>
          <span onClick={() => setCurrPage(maxPages)}> Last </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
