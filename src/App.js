import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Personnages from "./components/Personnages";
import Comics from "./components/Comics";
import CharacterDetails from "./components/CharacterDetails";
import Favourites from "./components/Favourites";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get(
        `https://marvel-imitation-backend.herokuapp.com/characters?limit=25`
      );
      setCharacters(response1.data);
      const response2 = await axios.get(
        `https://marvel-imitation-backend.herokuapp.com/comics?limit=25`
      );
      setComics(response2.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Router>
        <Header setSearch={setSearch} />
        <Switch>
          <Route exact path="/">
            <Home
              isLoading={isLoading}
              characters={characters}
              comics={comics}
            />
          </Route>
          <Route path="/personnages">
            <Personnages search={search} />
          </Route>
          <Route exact path="/comics">
            <Comics search={search} />
          </Route>
          <Route path="/comics/:id">
            <CharacterDetails />
          </Route>
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
