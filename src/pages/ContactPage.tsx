import React from "react";
import ContactForm from "components/ContactForm";
import style from "styles/pages/ContactPage.module.scss";
import classNames from "classnames";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "assets/icons/instagram-icon.svg";

function ContactPage() {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div
          className={classNames(
            style.gridContentContainer,
            style.gridContentMidBreak
          )}
        >
          <ContactForm />
          <iframe
            title="Meet-Mia-Map"
            className={style.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d301.7431080616475!2d15.982374871744454!3d45.8139525576677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d7002bf3de6b%3A0xb6953cf0242e83ff!2sMeet%20Mia!5e0!3m2!1shr!2shr!4v1642862587246!5m2!1shr!2shr"
            loading="lazy"
          />
        </div>
      </div>
      <div
        className={classNames(
          style.sectionWrapper,
          style.grayBg,
          style.bottomBorder
        )}
      >
        <div className={style.gridContentContainer}>
          <div className={style.contactInfo}>
            <h4>Broj i email</h4>
            <p>Tel: 01 4683 823</p>
            <p>Email: meetmia.cakes@gmail.com</p>
          </div>
          <div>
            <div className={style.socialMediaContainer}>
              <FacebookIcon />
              <p>@meetmia</p>
            </div>
            <div className={style.socialMediaContainer}>
              <InstagramIcon />
              <p>@meetmiacakes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
