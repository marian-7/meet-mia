import style from "styles/pages/HomePage.module.scss";

function HomePage() {
  return (
    <>
      <div className={style.coverContainer}>
        <h1 className={style.mainTitle}>Torte, kolači i slane poslastice</h1>
        <h4 className={style.subtitle}>Istražite naše specijalitete</h4>
        <button className={style.exploreBtn}>Istraži</button>
      </div>
    </>
  );
}

export default HomePage;
