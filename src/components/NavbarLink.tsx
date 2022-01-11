import style from "styles/components/NavbarLink.module.scss";
import { Link } from "react-router-dom";
import dropdownArrowIcon from "assets/icons/dropdown-arrow-icon.svg";
import NavbarDropdown from "./NavbarDropdown";
import React, { useState } from "react";
import { NavigationRoute } from "routes";

interface Props {
  route: NavigationRoute;
  closeMobileMenu: () => void;
}

function NavbarLink(props: Props) {
  const {
    route,
    closeMobileMenu,
    dropdown,
    setDropdown,
    onMouseLeave,
    onMouseEnter,
  } = useNavbarLink(props);

  return (
    <>
      {route.subRoutes && route.subRoutes.length ? (
        <li
          className={style.navItem}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to={route.path}
            className={style.navLinks}
            onClick={closeMobileMenu}
          >
            {route.title}
          </Link>
          <img
            onClick={() => setDropdown((clicked) => !clicked)}
            className={style.dropdownIcon}
            src={dropdownArrowIcon}
            alt="dropdown-arrow"
          />
          {dropdown && <NavbarDropdown routes={route.subRoutes} />}
        </li>
      ) : (
        <li className={style.navItem}>
          <Link
            to={route.path}
            className={style.navLinks}
            onClick={closeMobileMenu}
          >
            {route.title}
          </Link>
        </li>
      )}
    </>
  );
}

function useNavbarLink(props: Props) {
  const { route, closeMobileMenu } = props;
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return {
    route,
    closeMobileMenu,
    dropdown,
    setDropdown,
    onMouseLeave,
    onMouseEnter,
  };
}

export default NavbarLink;
