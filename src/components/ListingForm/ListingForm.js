import { useLocation, useParams } from "react-router-dom";
import listingImg from "../../assets/images/peach-bear.png";
import "./ListingForm.scss";
import { useState } from "react";

function ListingForm({
  formHeading,
  formButton,
  handleSubmit,
  handleChange,
  initialValues,
}) {
  const { id } = useParams();
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__container">
        <h2 className="form__heading">{formHeading}</h2>
        <div className="form__details">
          <div className="form__img-placeholder">
            <img className="form__img" src={listingImg} alt="sonny angel peach bear" />
          </div>
          <div className="form__details-inputs-container">
            <div className="form__initial-data-container">
              <h3
                className="form__heading-details
              "
              >
                current listing details
              </h3>
              <p className="form__info">series: {initialValues.series}</p>
              <p className="form__info">name: {initialValues.name}</p>
              <p className="form__info">price: ${initialValues.price}</p>
              <p className="form__info">contact: {initialValues.contact}</p>
            </div>
            <h3 className="form__details-heading">edit details</h3>
            <div className="form__input-container">
              <label className="form__label" htmlFor="series">
                choose series
              </label>
              <select
                className="form__dropdown"
                name="series"
                id="seriesId"
                onChange={handleChange}
                required
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
                required
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
                placeholder={
                  currentPage === `/listings/edit/${id}` ? `$${initialValues.price}` : "$"
                }
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-container">
              <label className="form__label">contact</label>
              <input
                className="form__email"
                type="email"
                name="contact"
                id="contactId"
                placeholder={
                  currentPage === `/listings/edit/${id}`
                    ? initialValues.contact
                    : "e-mail"
                }
                onChange={handleChange}
                required
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
