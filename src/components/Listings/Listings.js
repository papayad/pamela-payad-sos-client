import "./Listings.scss";
import SingleListingItem from "../SingleListingItem/SingleListingItem";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Listings() {
  const baseUrl = REACT_APP_SERVER_URL;
  const [listingsData, setListingsData] = useState([]);

  const getAllListings = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/listings`);
      setListingsData(response.data);
      console.log(response);
    } catch (error) {
      console.log("Error fetching listings ", error);
    }
  };

  useEffect(() => {
    getAllListings();
  }, []);

  return (
    <ul className="list">
      {!listingsData.length ? (
        <p>No listings</p>
      ) : (
        listingsData.map((listing) => {
          return (
            <li className="list__item" key={listing.id}>
              <SingleListingItem listing={listing} />
            </li>
          );
        })
      )}
    </ul>
  );
}

export default Listings;
