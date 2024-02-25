import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ViewSingleListingPage.scss";
import listingImg from "../../assets/images/peach-bear.png";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function ViewSingleListingPage() {
  const baseUrl = REACT_APP_SERVER_URL;
  const navigate = useNavigate();
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

  const handleDeleteClick = async () => {
    try {
      const response = await axios.delete(`${baseUrl}/listings/${id}`);
    } catch (error) {
      console.log("Error deleting listing", error);
    }

    toast.success("Listing deleted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <article className="single-listing">
      <img className="single-listing__img" src={listingImg} alt="peach bear" />
      <div className="single-listing__details-container">
        <div className="single-listing__deatils-info">
          <h3 className="single-listing__heading">details</h3>
          <p className="single-listing__details-text">
            series: {singleListingData.series}
          </p>
          <p className="single-listing__details-text">name: {singleListingData.name}</p>
          <p className="single-listing__details-text">
            price: ${singleListingData.price}
          </p>
          <p className="single-listing__details-text">
            contact: {singleListingData.contact}
          </p>
        </div>
        <div className="single-listing__btn-container">
          {singleListingData.user_id === 1 ? (
            <>
              <Link
                className="single-listing__btn-edit"
                to={`/listings/edit/${singleListingData.id}`}
              >
                edit
              </Link>
              <button className="single-listing__btn-del" onClick={handleDeleteClick}>
                delete
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </article>
  );
}

export default ViewSingleListingPage;
