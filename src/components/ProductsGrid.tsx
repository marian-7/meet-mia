import React, { useCallback, useEffect, useState } from "react";
import { Product } from "../products";
import style from "styles/components/ProductsGrid.module.scss";
import ProductCard from "./ProductCard";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import classNames from "classnames";

interface Props {
  products: Product[];
  horizontalScroll?: boolean;
  limit?: number;
  productCardClassName?: string;
}

function ProductsGrid(
  props: Props = { products: [], horizontalScroll: false }
) {
  const { products, limit, isScrollable, productCardClasses } =
    useProductsGrid(props);

  const renderItem = (product: Product) => {
    return (
      <ProductCard
        key={product.id}
        className={productCardClasses}
        isGridEl={isScrollable()}
        product={product}
      />
    );
  };

  return (
    <>
      {isScrollable() ? (
        <ScrollMenu itemClassName={style.productItemContainer}>
          {products.slice(0, limit ?? 100).map(renderItem)}
        </ScrollMenu>
      ) : (
        <div className={style.grid}>
          {products.slice(0, limit ?? 100).map(renderItem)}
        </div>
      )}
    </>
  );
}

function useProductsGrid(props: Props) {
  const { products, limit, horizontalScroll, productCardClassName } = props;
  const [width, setWidth] = useState<number>(window.innerWidth);
  const breakpoint = 1024;

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    const cleanUp = () => window.removeEventListener("resize", updateWidth);

    window.addEventListener("resize", updateWidth);

    return cleanUp;
  });

  const isScrollable = useCallback(() => {
    return width < breakpoint && horizontalScroll;
  }, [horizontalScroll, width]);

  const productCardClasses = classNames({
    [productCardClassName ?? ""]: !!productCardClassName,
    [style.gridElement]: !isScrollable(),
  });

  console.log(productCardClasses);

  return {
    products,
    limit,
    isScrollable,
    productCardClasses,
  };
}

export default ProductsGrid;
