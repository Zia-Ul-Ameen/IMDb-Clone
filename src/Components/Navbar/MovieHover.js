import React, { useCallback, useEffect, useState } from "react";
import styles from "./NavbarStyles.module.css";

const MovieHover = (props) => {
  const { movieFilter } = props;
  const [currentSelectedGenre, setCurrentSelectedGenre] = useState("");

  const handleFilter = (filterKey) => {
    movieFilter(filterKey);
    setCurrentSelectedGenre(filterKey);
  };

  const movieGenre = [
    "Drama",
    "Crime",
    "Action",
    "Biography",
    "History",
    "Adventure",
    "Western",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Animation",
    "Mystery",
    "Family",
    "Thriller",
    "War",
    "Comedy",
    "Music",
    "Horror",
    "Film-Noir",
    "Musical",
  ];

  return (
    <div className={styles.movieAndTv}>
      <div className={styles.movieHover}>
        <div className={styles.hoverYellow}>
          Filter <i class="fa-solid fa-sort-down"></i>
        </div>
        <div className={styles.restMovies}>
          <ul>
            {movieGenre.map((el) => (
              <li
                onClick={() => handleFilter(el)}
                className={
                  el === currentSelectedGenre ? styles.selectedFilter : ""
                }
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieHover;
