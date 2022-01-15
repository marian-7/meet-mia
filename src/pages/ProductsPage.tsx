import ProductsGrid from "../components/ProductsGrid";
import { products, productCategories, ProductCategory } from "../products";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-right.svg";
import style from "styles/pages/ProductsPage.module.scss";
import { useQueryString } from "../hooks/useQueryString";

function ProductsPage() {
  const { category } = useProductsPage();

  const renderSection = (
    category: ProductCategory,
    renderLink: boolean = true
  ) => {
    return (
      <div key={category.slug} className={style.sectionWrapper}>
        <div className={style.productsSection}>
          <h3 className={style.productsSectionTitle}>{category.name}</h3>
          <ProductsGrid
            productCardClassName={style.productCard}
            horizontalScroll={renderLink}
            limit={renderLink ? 8 : 100}
            products={products.filter((p) => p.category.slug === category.slug)}
          />
          {renderLink && (
            <Link
              to={`/proizvodi?filter=${category.slug}`}
              className={style.seeMoreLink}
            >
              Pogledaj više
              <ArrowIcon />
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      {category
        ? renderSection(category, false)
        : productCategories.map((c) => renderSection(c))}
    </>
  );
}

function useProductsPage() {
  const { filter } = useQueryString();
  let category: ProductCategory | null = null;
  if (filter) {
    category = productCategories.find((c) => c.slug === filter) ?? null;
  }

  return { category };
}

export default ProductsPage;
