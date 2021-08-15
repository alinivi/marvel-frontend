import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import heartSolid from "../../assets/heartSolid.svg";
import heartRegular from "../../assets/heartRegular.svg";
import Cookies from "js-cookie";
import testFavourite from "../testFavourite.js";

const CardCharacter = ({ data }) => {
  const history = useHistory();
  let isContained = testFavourite(Cookies.get("favCharacters"), data);
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
            let favCharacters = Cookies.get("favCharacters");
            if (favCharacters !== "") {
              favCharacters = JSON.parse(favCharacters);
              favCharacters.push(data);
              favCharacters = JSON.stringify(favCharacters);
            } else favCharacters = "[" + JSON.stringify(data) + "]";
            Cookies.set("favCharacters", favCharacters, { expires: 7 });
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
            let favCharacters = Cookies.get("favCharacters");
            favCharacters = JSON.parse(favCharacters);
            favCharacters.splice(favCharacters.indexOf(data), 1);
            favCharacters = JSON.stringify(favCharacters);
            Cookies.set("favCharacters", favCharacters, { expires: 7 });
            setIsFavourite(false);
          }}
          src={heartSolid}
          alt="favourite"
        />
      )}
      <div>{data.name}</div>
      <div>{data.description}</div>
    </div>
  );
};

export default CardCharacter;
