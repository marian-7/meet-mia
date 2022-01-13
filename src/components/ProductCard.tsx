import React from "react";
import { Product } from "products";
import style from "styles/components/ProductCard.module.scss";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  className?: string;
}

function ProductCard(props: Props) {
  const { product, className } = props;

  return (
    <Link
      to={`proizvodi/${product.id}`}
      className={`${style.productCard} ${className}`}
    >
      <div className={style.productImageContainer}>
        <img
          className={style.productImage}
          src={window.location.href + product.imgUrl}
          alt={product.name}
        />
      </div>

      <div className={style.productInfo}>
        <Rating
          size="medium"
          className={style.productRating}
          value={product.rating}
          readOnly
        />
        <h4 className={style.productName}>{product.name}</h4>
        <p className={style.productPrice}>HRK {product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
