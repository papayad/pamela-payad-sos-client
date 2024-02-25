import Listings from "../../components/Listings/Listings";
import "./HomePage.scss";

function HomePage() {
  return (
    <main className="home">
      <h1 className="home__heading">browse listings</h1>
      <Listings />
    </main>
  );
}

export default HomePage;
