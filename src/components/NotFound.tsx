import React from "react";
import style from "styles/components/NotFound.module.scss";
import { Link } from "react-router-dom";
import errorPhoto from "assets/images/404.png";

function NotFound() {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={errorPhoto} alt="404" />
      </div>
      <h2 className={style.errorTitle}>Stranica nije pronađena.</h2>
      <p>
        Idi nazad na <Link to="/">Naslovnica</Link>
      </p>
    </div>
  );
}

export default NotFound;
