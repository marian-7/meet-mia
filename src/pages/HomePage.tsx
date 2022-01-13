import style from "styles/pages/HomePage.module.scss";
import ProductsGrid from "../components/ProductsGrid";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow-right.svg";
import { products } from "../products";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CategoryCard from "../components/CategoryCard";

function HomePage() {
  return (
    <>
      <div className={style.coverContainer}>
        <h1 className={style.mainTitle}>Torte, kolači i slane poslastice</h1>
        <h4 className={style.subtitle}>Istražite naše specijalitete</h4>
        <button className={style.exploreBtn}>Istraži</button>
      </div>
      <div className={classNames(style.sectionWrapper, style.grayBg)}>
        <div className={style.productsSection}>
          <h3 className={style.productsSectionTitle}>Naši proizvodi</h3>
          <ProductsGrid products={products} />
          <Link to="/proizvodi" className={style.seeMoreLink}>
            Pogledaj više
            <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className={style.sectionWrapper}>
        <div className={style.categoriesSection}>
          <CategoryCard
            link="/proizvodi?filter=torte"
            title="Torte"
            backgroundUrl="kat-torte.jpg"
          />
          <CategoryCard
            link="/proizvodi?filter=kolaci"
            title="Kolači"
            backgroundUrl="kat-kolaci.jpg"
          />
          <CategoryCard
            link="/proizvodi?filter=slano"
            title="Slane poslastice"
            backgroundUrl="kat-slano.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
