import "./ListingForm.scss";

function ListingForm({ formHeading, formButton }) {
  return (
    <form className="form">
      <div className="form__container">
        <h2 className="form__heading">{formHeading}</h2>
        <div className="form__details">
          <div className="form__img-placeholder">(img here)</div>
          <div className="form__details-inputs-container">
            <h3 className="form__details-heading">details</h3>
            <div className="form__input-container">
              <label className="form__label" htmlFor="series">
                choose series
              </label>
              <select className="form__dropdown" name="series" id="seriesId">
                <option className="form__option" value="">
                  Please select
                </option>
              </select>
            </div>
            <div className="form__input-container">
              <label className="form__label" htmlFor="series">
                choose name
              </label>
              <select className="form__dropdown" name="name" id="nameId">
                <option className="form__option" value="">
                  Please select
                </option>
              </select>
            </div>
            <div className="form__input-container">
              <label className="form__label">price</label>
              <input
                className="form__price"
                type="number"
                name="price"
                id="priceId"
                min="1"
                step="any"
                placeholder="$"
              />
            </div>
            <div className="form__input-container">
              <label className="form__label">contact</label>
              <input
                className="form__email"
                type="email"
                name="email"
                id="emailid"
                placeholder="e-mail"
              />
            </div>
            <button className="form__button">{formButton}</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ListingForm;
