import "./App.css";
import ImdbNavbar from "./Components/Navbar/ImdbNavbar";
import MovieListview from "./Components/ListView/MovieListview";
import Detail from "./Components/DetailView/Detail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";
import { moviesList, moviesByid } from "./App.constant";

function App() {
  const [moviesData, setMoviesData] = useState(moviesList);
  const [filteredBy, setFilteredBy] = useState("");
  const [searchedBy, setSearchedBy] = useState("");

  useEffect(() => {
    const headers = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d97e486367msh4b8fce5ae1e6778p11e835jsn717d0b380a7a",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };
    fetch("https://imdb-top-100-movies.p.rapidapi.com/", headers)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMoviesData(data);
      });
  }, []);

  const onMovieFilter = (filterKey) => {
    const filteredMovies = moviesList.filter((movie) =>
      movie.genre.includes(filterKey)
    );
    setFilteredBy(filterKey);
    setSearchedBy("");
    setMoviesData(filteredMovies);
  };

  const onMovieSearch = (searchValue) => {
    const searchedMovies = moviesList.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setMoviesData(searchedMovies);
    setSearchedBy(searchValue);
  };
  return (
    <div className="mainContainer">
      <ImdbNavbar
        movieFilter={onMovieFilter}
        movieSearch={onMovieSearch}
        filteredBy={filteredBy}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/movielist"
            element={
              <MovieListview
                moviesData={moviesData}
                searchedby={searchedBy}
                filteredBy={filteredBy}
              />
            }
          />
          <Route
            path="/"
            exact
            element={
              <MovieListview
                moviesData={moviesData}
                searchedby={searchedBy}
                filteredBy={filteredBy}
              />
            }
          />
          <Route path="/detailview" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
