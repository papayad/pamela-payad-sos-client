import { useNavigate, useParams } from "react-router-dom";
import ListingForm from "../../components/ListingForm/ListingForm";
import "./EditMyListingPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function EditMyListingPage() {
  const baseUrl = REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const { id } = useParams();

  const [editListing, setEditListing] = useState({
    id: id,
    series: "",
    name: "",
    price: "",
    contact: "",
    user_id: 1,
  });

  const getListingData = async () => {
    try {
      const response = await axios.get(`${baseUrl}/listings/${id}`);
      const listingData = response.data;

      setEditListing({
        id: id,
        series: listingData.series,
        name: listingData.name,
        price: listingData.price,
        contact: listingData.contact,
        user_id: 1,
      });
    } catch (error) {
      console.log("Error fetching listing ", error);
    }
  };

  useEffect(() => {
    getListingData();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditListing({ ...editListing, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { ...updatedData } = editListing;

    try {
      const response = await axios.patch(`${baseUrl}/listings/edit/${id}`, updatedData);
    } catch (error) {
      console.log("Error updating listing ", error);
    }

    toast.success("Listing edited!", {
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
    <div className="edit-listing">
      <ListingForm
        formHeading="edit listing"
        formButton="update"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        initialValues={editListing}
      />
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
    </div>
  );
}

export default EditMyListingPage;
