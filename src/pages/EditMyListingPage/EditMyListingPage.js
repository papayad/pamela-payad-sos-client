import { useNavigate, useParams } from "react-router-dom";
import ListingForm from "../../components/ListingForm/ListingForm";
import "./EditMyListingPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

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

    navigate("/");
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
    </div>
  );
}

export default EditMyListingPage;
