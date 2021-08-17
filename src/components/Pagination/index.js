import React from "react";
import "./index.css";

const Pagination = ({ currPage, maxPages, setCurrPage }) => {
  return (
    <div>
      {currPage === 1 ? (
        <div className="pagination">
          <span className="red-text"> Page {currPage} </span>
          <span
            className="click-effect"
            onClick={() => setCurrPage(currPage + 1)}
          >
            {" "}
            &gt; Next{" "}
          </span>
          <span className="click-effect" onClick={() => setCurrPage(maxPages)}>
            {" "}
            &gt;&gt; Last{" "}
          </span>
        </div>
      ) : currPage === maxPages ? (
        <div className="pagination">
          <span className="click-effect" onClick={() => setCurrPage(1)}>
            First &lt;&lt;{" "}
          </span>
          <span
            className="click-effect"
            onClick={() => setCurrPage(currPage - 1)}
          >
            {" "}
            Previous &lt;{" "}
          </span>
          <span className="red-text">Page {currPage}</span>
        </div>
      ) : (
        <div className="pagination">
          <span className="click-effect" onClick={() => setCurrPage(1)}>
            {" "}
            First &lt;&lt;{" "}
          </span>
          <span
            className="click-effect"
            onClick={() => setCurrPage(currPage - 1)}
          >
            {" "}
            Previous &lt;{" "}
          </span>
          <span className="red-text">Page {currPage}</span>
          <span
            className="click-effect"
            onClick={() => setCurrPage(currPage + 1)}
          >
            {" "}
            &gt; Next{" "}
          </span>
          <span className="click-effect" onClick={() => setCurrPage(maxPages)}>
            {" "}
            &gt;&gt; Last{" "}
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
