import "./Listings.scss";
import SingleListingItem from "../SingleListingItem/SingleListingItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Listings() {
  const baseUrl = REACT_APP_SERVER_URL;
  const [listingsData, setListingsData] = useState([]);
  const [user1ListingData, setUser1ListingData] = useState([]);

  const getAllListings = async () => {
    try {
      const response = await axios.get(`${baseUrl}/listings`);
      setListingsData(response.data);
    } catch (error) {
      console.log("Error fetching listings ", error);
    }
  };

  const getUser1Listings = async () => {
    try {
      const response = await axios.get(`${baseUrl}/users/1/listings`);
      setUser1ListingData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching listings ", error);
    }
  };

  useEffect(() => {
    getAllListings();
    getUser1Listings();
  }, []);

  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <ul className="list">
      {currentPage === "/"
        ? listingsData.map((listing) => {
            return (
              <li className="list__item" key={listing.id}>
                <SingleListingItem listing={listing} />
              </li>
            );
          })
        : user1ListingData.map((listing) => {
            return (
              <li className="list__item" key={listing.id}>
                <SingleListingItem listing={listing} />
              </li>
            );
          })}
      {!listingsData.length && currentPage === "/" ? (
        <p>There are no current listings.</p>
      ) : (
        ""
      )}
      {!user1ListingData.length && currentPage === "/mylistings" ? (
        <p>You have no current listings.</p>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Listings;
