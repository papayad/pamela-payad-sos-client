import { eventWrapper } from "@testing-library/user-event/dist/utils";
import "./ListingForm.scss";

function ListingForm({ formHeading, formButton, handleSubmit, handleChange }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
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
              <select
                className="form__dropdown"
                name="series"
                id="seriesId"
                onChange={handleChange}
              >
                <option className="form__option" value="">
                  Please select
                </option>
                <option className="form__option" value="Charm Candy Store (2023)">
                  Charm Candy Store (2023)
                </option>
                <option className="form__option" value="Gifts of Love (2023)">
                  Gifts of Love (2023)
                </option>
              </select>
            </div>
            <div className="form__input-container">
              <label className="form__label" htmlFor="series">
                choose name
              </label>
              <select
                className="form__dropdown"
                name="name"
                id="nameId"
                onChange={handleChange}
              >
                <option className="form__option" value="">
                  Please select
                </option>
                <option className="form__option" value="Peach Bear">
                  Peach Bear
                </option>
                <option className="form__option" value="Love Lop Ear Rabbit">
                  Love Lop Ear Rabbit
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
                onChange={handleChange}
              />
            </div>
            <div className="form__input-container">
              <label className="form__label">contact</label>
              <input
                className="form__email"
                type="email"
                name="contact"
                id="contactId"
                placeholder="pp@yipee.ca"
                onChange={handleChange}
              />
            </div>
            <button className="form__button" type="submit">
              {formButton}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ListingForm;
