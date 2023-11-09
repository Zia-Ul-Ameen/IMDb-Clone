import React, { useEffect, useState } from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  const rank = new URLSearchParams(window.location.search).get("rank");
  const [currentDetail, setCurrentDetail] = useState({});
  useEffect(() => {
    const headers = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d97e486367msh4b8fce5ae1e6778p11e835jsn717d0b380a7a",
        "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
      },
    };
    fetch(`https://imdb-top-100-movies.p.rapidapi.com/top${rank}`, headers)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentDetail(data);
      });
  }, []);
  return (
    <div className={styles.parent}>
      <div className={styles.movieDetailPage}>
        <div className={styles.detailPage}>
          <div className={styles.header}>
            <p className={styles.movieTitle}>{currentDetail.title}</p>
            <p className={styles.yearAndHour}>{currentDetail.year}</p>
          </div>
          <div
            className={styles.imgPage}
            style={{ backgroundImage: `url(${currentDetail.big_image})` }}
          ></div>
          <div className={styles.ratedAndGenre}>
            <div className={styles.rating}>
              <i class="fa-solid fa-star"></i>
              <p>{currentDetail.rating}</p>
            </div>
            {(currentDetail.genre || []).map((el) => (
              <div className={styles.genre}>{el}</div>
            ))}
          </div>
          <div className={styles.castAndCrew}>
            <ul>
              <li>
                <p>Director</p> :{` ${currentDetail.director}`}
              </li>
              <li>
                <p>Writers</p> :{` ${currentDetail.writers}`}
              </li>
              <li>
                <p>Actors</p> : andrew, garfield, tom, Holland(default)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.parentMoreDetails}>
        <div className={styles.moreDetails}>
          <div className={styles.moreDetailsImg}>
            <img src={currentDetail.big_image}></img>
          </div>
          <div>
            <h3>Movie Description</h3>
            <p className={styles.moreDetailsP}>{currentDetail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
