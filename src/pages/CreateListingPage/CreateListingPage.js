import ListingForm from "../../components/ListingForm/ListingForm";
import "./CreateListingPage.scss";

function CreateListingPage() {
  return (
    <div className="create-listing">
      <ListingForm formHeading="create listing" formButton="post" />
    </div>
  );
}

export default CreateListingPage;
