import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import heartSolid from "../../assets/heartSolid.svg";
import heartRegular from "../../assets/heartRegular.svg";
import Cookies from "js-cookie";
import testFavourite from "../testFavourite.js";

const CardComic = ({ data }) => {
  const location = useLocation();
  let isContained = testFavourite(Cookies.get("favComics"), data);
  const [isFavourite, setIsFavourite] = useState(isContained);
  if (data.description) {
    data.description = data.description.replace("&#39;", "'");
    data.description = data.description.replace("&ndash", "-");
  }

  return (
    <div
      className={location.pathname !== "favourites" ? "card-comic" : "fav-card"}
    >
      <div className="card-images">
        <img
          className="comic-image"
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt="character"
        />
        {!isFavourite ? (
          <img
            className="empty-heart"
            onClick={(event) => {
              event.stopPropagation();
              let favComics = Cookies.get("favComics");
              if (favComics !== undefined) {
                favComics = JSON.parse(favComics);
                favComics.push(data);
                favComics = JSON.stringify(favComics);
              } else favComics = "[" + JSON.stringify(data) + "]";
              Cookies.set("favComics", favComics, { expires: 7 });
              setIsFavourite(true);
            }}
            src={heartRegular}
            alt="add to favorites"
          />
        ) : (
          <img
            className="full-heart"
            onClick={(event) => {
              event.stopPropagation();
              let favComics = Cookies.get("favComics");
              favComics = JSON.parse(favComics);
              favComics.splice(favComics.indexOf(data), 1);
              favComics = JSON.stringify(favComics);
              Cookies.set("favComics", favComics, { expires: 7 });
              setIsFavourite(false);
            }}
            src={heartSolid}
            alt="remove from favourites"
          />
        )}
      </div>

      <div className="card-info">
        <div className="name">{data.title}</div>
        {location.pathname !== "/favourites" && (
          <div className="description">{data.description}</div>
        )}
      </div>
    </div>
  );
};

export default CardComic;
