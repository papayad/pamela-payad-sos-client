import { useState } from "react";
import ListingForm from "../../components/ListingForm/ListingForm";
import "./CreateListingPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function CreateListingPage() {
  const baseUrl = REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const [createListing, setCreateListing] = useState({
    series: "",
    name: "",
    price: "",
    contact: "pp@yipee.ca",
    user_id: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreateListing({ ...createListing, [name]: value });
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

    navigate("/");
  };

  return (
    <div className="create-listing">
      <ListingForm
        formHeading="create listing"
        formButton="post"
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default CreateListingPage;
