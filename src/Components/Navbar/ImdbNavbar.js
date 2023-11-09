import React, { useState } from "react";
import logoImage from "../../images/IMDb-Logo.png";
import MovieHover from "./MovieHover";
import styles from "./NavbarStyles.module.css";

const ImdbNavbar = (props) => {
  const { movieSearch } = props;
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = () => {
    movieSearch(searchValue);
  };
  const useEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={styles.parentNavbar}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img
            src={logoImage}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "http://localhost:3000/movielist";
            }}
          />
        </div>
        <MovieHover {...props} />

        <div className={styles.searchBtn}>
          <input
            placeholder="Search Here..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={useEnter}
          />
          <button onClick={handleSearch}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <ul className={styles.login}>
          <li
            className={styles.signup}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.imdb.com/registration/signin?ref=nv_generic_lgin&u=%2F";
            }}
          >
            Sign In
          </li>
          <li
            className={styles.signup}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.imdb.com/ap/register?openid.return_to=https%3A%2F%2Fwww.imdb.com%2Fregistration%2Fap-signin-handler%2Fimdb_us&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=imdb_us&openid.mode=checkid_setup&siteState=eyJvcGVuaWQuYXNzb2NfaGFuZGxlIjoiaW1kYl91cyIsInJlZGlyZWN0VG8iOiJodHRwczovL3d3dy5pbWRiLmNvbS8_cmVmXz1sb2dpbiJ9&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&tag=imdbtag_reg-20";
            }}
          >
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ImdbNavbar;
