import "./Listings.scss";
import SingleListingItem from "../SingleListingItem/SingleListingItem";

function Listings() {
  return (
    <ul className="list">
      <SingleListingItem />
      <SingleListingItem />
      <SingleListingItem />
    </ul>
  );
}

export default Listings;
