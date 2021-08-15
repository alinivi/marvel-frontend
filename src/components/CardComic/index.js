import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import heartSolid from "../../assets/heartSolid.svg";
import heartRegular from "../../assets/heartRegular.svg";
import Cookies from "js-cookie";
import testFavourite from "../testFavourite.js";

const CardComic = ({ data }) => {
  const history = useHistory();
  let isContained = testFavourite(Cookies.get("favComics"), data);
  const [isFavourite, setIsFavourite] = useState(isContained);

  return (
    <div className="card" onClick={() => history.push(`/comics/:${data._id}`)}>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="character"
      />
      {!isFavourite ? (
        <img
          className="addFavourites"
          onClick={(event) => {
            event.stopPropagation();
            let favComics = Cookies.get("favComics");
            if (favComics !== "") {
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
          className="addFavourites"
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
          alt="favourite"
        />
      )}
      <div>{data.title}</div>
      <div>{data.description}</div>
    </div>
  );
};

export default CardComic;
