import React from "react";
import style from "styles/components/CategoryCard.module.scss";
import { Link } from "react-router-dom";

interface Props {
  link: string;
  title: string;
  backgroundUrl: string;
}

function CategoryCard(props: Props) {
  const { link, title, backgroundUrl } = props;

  return (
    <Link to={link} className={style.categoryCard}>
      <img src={`${window.location.href}/${backgroundUrl}`} alt="" />
      <h3 className={style.categoryName}>{title}</h3>
    </Link>
  );
}

export default CategoryCard;
