import React, { useEffect, useState } from "react";
import { Product, products } from "../products";
import style from "styles/components/ProductsGrid.module.scss";
import ProductCard from "./ProductCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

interface Props {
  products: Product[];
  limit?: 8;
}

function ProductsGrid(props: Props) {
  const { products } = props;
  const [width, setWidth] = useState<number>(window.innerWidth);
  const breakpoint = 1040;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const renderItem = (product: Product) => {
    return (
      <ProductCard
        key={product.id}
        className={width < breakpoint ? "" : style.gridElement}
        product={product}
      />
    );
  };

  return (
    <>
      {width < breakpoint ? (
        <ScrollMenu itemClassName={style.productItemContainer}>
          {products.map(renderItem)}
        </ScrollMenu>
      ) : (
        <div className={style.grid}>{products.map(renderItem)}</div>
      )}
    </>
  );
}

export default ProductsGrid;
