import "./ViewSingleListingPage.scss";
import listingImg from "../../assets/images/peach-bear.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ViewSingleListingPage() {
  const baseUrl = REACT_APP_SERVER_URL;
  const { id } = useParams();
  const [singleListingData, setSingleListingData] = useState([]);

  const getSingleListingData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/listings/${id}`);
      setSingleListingData(response.data);
    } catch (error) {
      console.log("Error fetching listing details", error);
    }
  };

  useEffect(() => {
    getSingleListingData();
  }, [id]);

  return (
    <article className="single-listing">
      <img className="single-listing__img" src={listingImg} alt="peach bear" />
      <div className="single-listing__details-container">
        <h3 className="single-listing__heading">details</h3>
        <p className="single-listing__details-text">series: {singleListingData.series}</p>
        <p className="single-listing__details-text">name: {singleListingData.name}</p>
        <p className="single-listing__details-text">price: {singleListingData.price}</p>
        <p className="single-listing__details-text">
          contact: {singleListingData.contact}
        </p>
      </div>
    </article>
  );
}

export default ViewSingleListingPage;
