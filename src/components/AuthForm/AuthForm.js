import "./AuthForm.scss";

function AuthForm({ formHeading, formButton }) {
  return (
    <form className="auth-form">
      <h2 className="auth-form__heading">{formHeading}</h2>
      <div className="auth-form__input-container--desktop">
        <input
          className="auth-form__input"
          type="text"
          name="email"
          id="emailId"
          placeholder="e-mail"
        />
        <input
          className="auth-form__input"
          type="text"
          name="password"
          id="passwordId"
          placeholder="password"
        />
      </div>
      <button className="auth-form__button" type="submit">
        {formButton}
      </button>
    </form>
  );
}

export default AuthForm;
