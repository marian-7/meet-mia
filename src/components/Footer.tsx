import React from "react";
import style from "styles/components/Footer.module.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.footer}>
        <div className={style.footerSection}>
          <p className={style.sectionTitle}>Linkovi</p>
          <p>
            <Link to="/">Naslovnica</Link>
          </p>
          <p>
            <Link to="/o-nama">O nama</Link>
          </p>
          <p>
            <Link to="/proizvodi?filter=torte">Torte</Link>
          </p>
          <p>
            <Link to="/proizvodi?filter=kolaci">Kolači</Link>
          </p>
          <p>
            <Link to="/proizvodi?filter=slano">Slane poslastice</Link>
          </p>
        </div>
        <div className={style.footerSection}>
          <p className={style.sectionTitle}>Kontakt</p>
          <p>
            <a href="tel: +385 1 4683 823">+385 1 4683 823</a>
          </p>
          <p>
            <a href="mailto: meetmia.cakes@gmail.com">
              meetmia.cakes@gmail.com
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.google.com/maps?q=Vla%C5%A1ka+ulica+43,+Zagreb&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjp9pyvl6_1AhXgi_0HHZIQAkQQ_AUoAXoECAEQAw"
            >
              Vlaška ulica 43, Zagreb
            </a>
          </p>
        </div>
        <div className={style.footerSection}>
          <p className={style.sectionTitle}>Društvene mreže</p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/meetmia"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/meetmiacakes/"
            >
              Instagram
            </a>
          </p>
        </div>
        <div className={style.footerSection}>
          <p className={style.sectionTitle}>Usluge</p>
          <p>
            <a href="/">Plaćanje i dostava</a>
          </p>
          <p>
            <a href="/">Pitanja</a>
          </p>
          <p>
            <a href="/">Povrati</a>
          </p>
          <p>
            <a href="/">Uvjeti korištenja</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
