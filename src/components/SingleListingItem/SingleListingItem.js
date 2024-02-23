import "./SingleListingItem.scss";
import listingImg from "../../assets/images/peach-bear.png";
import openListingIcon from "../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz24.png";
import { Link } from "react-router-dom";

function SingleListingItem({ listing }) {
  return (
    <article className="card">
      <Link className="card__link" to={`/listings/${listing.id}`}>
        <img className="card__img" src={listingImg} alt="peach bear sonny angel" />
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
          {listing.user_id === 1 ? (
            <Link to={`/listings/edit/${listing.id}`}>edit</Link>
          ) : (
            ""
          )}
        </div>
      </Link>
      {/* link icon */}
    </article>
  );
}

export default SingleListingItem;
