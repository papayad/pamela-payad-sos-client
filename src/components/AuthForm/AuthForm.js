import React from "react";
import "./AuthForm.scss";

function AuthForm({ formHeading, formButton }) {
  return (
    <form className="form">
      <h2 className="form__heading">{formHeading}</h2>
      <div className="form__input-container--desktop">
        <input
          className="form__input"
          type="text"
          name="email"
          id="emailId"
          placeholder="e-mail"
        />
        <input
          className="form__input"
          type="text"
          name="password"
          id="passwordId"
          placeholder="password"
        />
      </div>
      <button className="form__button" type="submit">
        {formButton}
      </button>
    </form>
  );
}

export default AuthForm;
