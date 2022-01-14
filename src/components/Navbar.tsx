import React, { useState } from "react";
import logo from "assets/images/MeetMia-logo.png";
import hamburgerIcon from "assets/icons/menu-icon.svg";
import { ReactComponent as ShoppingCartIcon } from "assets/icons/shopping-cart-icon.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile-icon.svg";
import { Link } from "react-router-dom";
import style from "styles/components/Navbar.module.scss";
import NavbarLink from "./NavbarLink";
import { routes } from "../routes";

function Navbar() {
  const { click, handleClick, closeMobileMenu } = useNavbar();

  return (
    <header className={style.navWrapper}>
      <nav className={style.navbar}>
        <Link to="/" className={style.navbarLogo} onClick={closeMobileMenu}>
          <img src={logo} alt="meet-mia-logo" />
        </Link>
        <div className={style.menuIcon} onClick={handleClick}>
          <img src={hamburgerIcon} alt="hamburger-menu" />
        </div>
        <ul
          className={click ? `${style.navMenu} ${style.active}` : style.navMenu}
        >
          {routes.map((route, index) => (
            <NavbarLink
              key={index}
              route={route}
              closeMobileMenu={closeMobileMenu}
            />
          ))}
        </ul>
        <div className={style.icons}>
          <div className={style.iconContainer}>
            <ShoppingCartIcon />
          </div>
          <div className={style.iconContainer}>
            <ProfileIcon />
          </div>
        </div>
      </nav>
    </header>
  );
}

function useNavbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((click) => !click);
  const closeMobileMenu = () => setClick(false);

  return {
    click,
    handleClick,
    closeMobileMenu,
  };
}

export default Navbar;
