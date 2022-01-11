import React, { useState, useRef, useEffect } from "react";
import logo from "assets/images/MeetMia-logo.png";
import shoppingCartIcon from "assets/icons/shopping-cart-icon.svg";
import profileIcon from "assets/icons/profile-icon.svg";
import dropdownArrowIcon from "assets/icons/dropdown-arrow-icon.svg";
import menuIcon from "assets/icons/menu-icon.svg";
import style from "styles/components/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.imageContainer}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={style.links}>
        <li>
          <Link to="/o-nama">O nama</Link>
        </li>
        <li>
          <Link to="/proizvodi">Proizvodi</Link>
          <img
            className={style.dropdownArrow}
            src={dropdownArrowIcon}
            alt="dropdown-arrow"
          />
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
      <div className={style.userIcons}>
        <div className={style.iconContainer}>
          <img src={shoppingCartIcon} alt="shopping-cart" />
        </div>
        <div className={style.iconContainer}>
          <img src={profileIcon} alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
