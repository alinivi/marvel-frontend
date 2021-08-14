import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./index.css";
import heartSolid from "../../assets/heartSolid.svg";
import heartRegular from "../../assets/heartRegular.svg";
import Cookies from "js-cookie";

const Card = ({ data }) => {
  const history = useHistory();
  const location = useLocation();
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="card" onClick={() => history.push(`/comics/:${data._id}`)}>
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        alt="character"
      />
      {!isFavourite ? (
        <img
          className="addFavourites"
          onClick={
            location.pathname === "/personnages"
              ? (event) => {
                  event.stopPropagation();
                  let favCharacters = Cookies.get("favCharacters");
                  if (favCharacters !== "") {
                    favCharacters = JSON.parse(favCharacters);
                    favCharacters.push(data);
                    favCharacters = JSON.stringify(favCharacters);
                  } else favCharacters = "[" + JSON.stringify(data) + "]";
                  Cookies.set("favCharacters", favCharacters, { expires: 7 });
                  setIsFavourite(true);
                }
              : (event) => {
                  event.stopPropagation();
                  let favComics = Cookies.get("favComics");
                  if (favComics !== "") {
                    favComics = JSON.parse(favComics);
                    favComics.push(data);
                    favComics = JSON.stringify(favComics);
                  } else favComics = "[" + JSON.stringify(data) + "]";
                  Cookies.set("favComics", favComics, { expires: 7 });
                  setIsFavourite(true);
                }
          }
          src={heartRegular}
          alt="add to favorites"
        />
      ) : (
        <img
          className="addFavourites"
          onClick={
            location.pathname === "/personnages"
              ? (event) => {
                  event.stopPropagation();
                  let favCharacters = Cookies.get("favCharacters");
                  favCharacters = JSON.parse(favCharacters);
                  favCharacters.splice(favCharacters.indexOf(data), 1);
                  favCharacters = JSON.stringify(favCharacters);
                  Cookies.set("favCharacters", favCharacters, { expires: 7 });
                  setIsFavourite(false);
                }
              : (event) => {
                  event.stopPropagation();
                  let favComics = Cookies.get("favComics");
                  favComics = JSON.parse(favComics);
                  favComics.splice(favComics.indexOf(data), 1);
                  favComics = JSON.stringify(favComics);
                  Cookies.set("favComics", favComics, { expires: 7 });
                  setIsFavourite(false);
                }
          }
          src={heartSolid}
          alt="favourite"
        />
      )}
      <div>{location.pathname === "/personnages" ? data.name : data.title}</div>
      <div>{data.description}</div>
    </div>
  );
};

export default Card;
