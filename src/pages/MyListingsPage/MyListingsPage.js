import "./MyListingsPage.scss";
import Listings from "../../components/Listings/Listings";

function MyListingsPage() {
  return (
    <main className="home">
      <h1 className="home__heading">my listings</h1>
      <Listings />
    </main>
  );
}

export default MyListingsPage;
