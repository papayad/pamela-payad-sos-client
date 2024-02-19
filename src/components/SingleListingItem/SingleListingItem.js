import "./SingleListingItem.scss";
import listingImg from "../../assets/images/peach-bear.png";
import openListingIcon from "../../assets/icons/chevron_right_FILL0_wght400_GRAD0_opsz24.png";

function SingleListingItem({ angelName, angelSeries, listingUser }) {
  return (
    <article className="card">
      <img
        className="card__img"
        src={listingImg}
        alt="peach bear sonny angel"
      />
      <div className="card__info-container">
        <div className="card__details-container">
          <h2 className="card__heading">Peach Bear{angelName}</h2>
          <img
            className="card__open-icon"
            src={openListingIcon}
            alt="chevron right icon"
          />
        </div>
        <p className="card__series">Candy Series{angelSeries}</p>
        <h3 className="card__poster">listing by papayad{listingUser}</h3>
      </div>
      {/* link icon */}
    </article>
  );
}

export default SingleListingItem;
