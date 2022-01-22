import React from "react";
import { TextField } from "@mui/material";
import style from "styles/components/ContactForm.module.scss";

function ContactForm() {
  return (
    <form className={style.form}>
      <h3 className={style.formTitle}>Pošalji nam upit</h3>
      <TextField
        className={style.input}
        id="fullName"
        label="Ime i Prezime"
        variant="outlined"
      />
      <TextField
        className={style.input}
        id="email"
        label="Email"
        variant="outlined"
      />
      <TextField
        className={style.input}
        id="message"
        label="Poruka"
        multiline
        rows={4}
      />
      <div className={style.actions}>
        <button type="button">Pošalji</button>
      </div>
    </form>
  );
}

export default ContactForm;
