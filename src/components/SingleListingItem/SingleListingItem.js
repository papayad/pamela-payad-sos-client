import { Link, useLocation } from "react-router-dom";
import "./SingleListingItem.scss";
import listingImg from "../../assets/images/peach-bear.png";
import openListingIcon from "../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz24.png";

function SingleListingItem({ listing }) {
  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <article className="card">
      {listing.user_id === 1 && currentPage === "/mylistings" ? (
        <div className="card__btn-container">
          <Link className="card__btn-edit" to={`/listings/edit/${listing.id}`}>
            edit
          </Link>
        </div>
      ) : (
        ""
      )}
      <Link className="card__link" to={`/listings/${listing.id}`}>
        <div className="card__img-container">
          <img className="card__img" src={listingImg} alt="peach bear sonny angel" />
        </div>
        <div className="card__info-container">
          <div className="card__details-container">
            <h2 className="card__heading">{listing.name}</h2>
            <img
              className="card__open-icon"
              src={openListingIcon}
              alt="chevron right icon"
            />
          </div>
          <p className="card__series">{listing.series}</p>
          <p className="card__series">{listing.contact}</p>
        </div>
      </Link>
    </article>
  );
}

export default SingleListingItem;
