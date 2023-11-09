import React from "react";
import styles from "../ListView/ListViewStyles.module.css";
import { useNavigate } from "react-router-dom";

const MovieListview = (props) => {
  const { moviesData, filteredBy, searchedby } = props;
  console.log(props, "props");
  const history = useNavigate();
  const handleCardClick = (rank) => {
    history(`/detailView?rank=${rank}`);
  };
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.topPicks}>
        <div className={styles.beforeLine}></div>
        <h3>
          {moviesData.length < 100
            ? searchedby
              ? `Searched by ${searchedby}`
              : `Filtered by ${filteredBy}`
            : "Top 100 Picks"}
        </h3>
      </div>
      <div className={styles.moviecardsContainer}>
        {moviesData.map((movie) => (
          <div
            className={styles.cardContainer}
            onClick={() => handleCardClick(movie.rank)}
          >
            <div className={styles.parentCardImg}>
              <img src={movie.image} className={styles.cardImg} />
            </div>

            <div className={styles.parentCardDetails}>
              <li className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <p>{movie.rating}</p>
              </li>
              <li
                className={styles.movieName}
              >{`${movie.rank}. ${movie.title}`}</li>
              <li className={styles.moreDetails}>
                <button>More Details</button>
              </li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListview;
