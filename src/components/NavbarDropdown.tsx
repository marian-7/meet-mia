import React, { useState } from "react";
import { NavigationRoute } from "routes";
import style from "styles/components/NavbarDropdown.module.scss";
import { Link } from "react-router-dom";

interface Props {
  routes: NavigationRoute[];
}

function NavbarDropdown(props: Props) {
  const { routes } = props;
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={
          click ? `${style.dropdownMenu} ${style.clicked}` : style.dropdownMenu
        }
      >
        {routes.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={style.dropdownLink}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default NavbarDropdown;
