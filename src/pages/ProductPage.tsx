import React from "react";
import { useParams } from "react-router-dom";
import { Product, products } from "products";
import NotFound from "components/NotFound";
import style from "styles/pages/ProductPage.module.scss";
import ProductTabs from "../components/ProductTabs";
import ProductsGrid from "../components/ProductsGrid";
import classNames from "classnames";

function ProductPage() {
  const { product } = useProductPage();

  return product ? (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.section}>
          <div className={style.imgContainer}>
            <img
              src={window.location.origin + product.imgUrl}
              alt={product.name}
            />
          </div>
          <div className={style.productInfo}>
            <h3 className={style.productTitle}>{product.name}</h3>
            <h5 className={style.productCategory}>{product.category.name}</h5>
            <div className={style.priceContainer}>
              <p className={style.productPrice}>
                HRK {product.price.toFixed(2)}
              </p>
              <button className={style.addToCartBtn}>Dodaj u košaricu</button>
            </div>
            <ProductTabs />
          </div>
        </div>
      </div>
      <div
        className={classNames(
          style.sectionWrapper,
          style.bgGrey,
          style.bottomBorder
        )}
      >
        <div className={style.suggestedSection}>
          <h4 className={style.suggestedSectionTitle}>
            Proizvodi koji vas mogu zanimati
          </h4>
          <ProductsGrid
            horizontalScroll
            limit={4}
            products={products
              .filter((p) => p.id !== product.id)
              .sort((p1, p2) =>
                p1.category.slug === product?.category.slug ? -1 : 1
              )}
          />
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
}

function useProductPage() {
  const { id } = useParams();

  const product: Product | null =
    products.find((p) => p.id === Number(id)) ?? null;

  return { product };
}

export default ProductPage;
