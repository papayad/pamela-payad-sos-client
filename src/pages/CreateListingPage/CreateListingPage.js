import { useState } from "react";
import ListingForm from "../../components/ListingForm/ListingForm";
import "./CreateListingPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CreateListingPage() {
  const baseUrl = REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const [createListing, setCreateListing] = useState({
    series: "",
    name: "",
    price: "",
    contact: "",
    user_id: 1,
  });

  const [selectedSeriesImg, setSelectedSeriesImg] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setCreateListing({ ...createListing, [name]: value });
    setSelectedSeriesImg(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const listingData = {
      series: createListing.series,
      name: createListing.name,
      price: createListing.price,
      contact: createListing.contact,
      user_id: createListing.user_id,
    };

    try {
      const response = await axios.post(`${baseUrl}/listings`, listingData);
      if (!response.status === 201) {
        throw new Error(`Failed to create, status: ${response.status}`);
      }
    } catch (error) {
      console.log("Error creating new listing ", error);
    }

    toast.success("Listing posted!", {
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
    <div className="create-listing">
      <ListingForm
        formHeading="create listing"
        formButton="post"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        initialValues={createListing}
        selectedSeriesImg={selectedSeriesImg}
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

export default CreateListingPage;
