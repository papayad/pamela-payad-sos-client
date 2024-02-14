import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/HomePage/SignUpPage";
import LoginPage from "./pages/HomePage/LoginPage";
import ViewSingleListingPage from "./pages/ViewSingleListingPage/ViewSingleListingPage";
import CreateListingPage from "./pages/CreateListingPage/CreateListingPage";
import MyListingsPage from "./pages/MyListingsPage/MyListingsPage";
import EditMyListingPage from "./pages/EditMyListingPage/EditMyListingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/listings/:id" element={<ViewSingleListingPage />} />
        <Route path="/createlisting" element={<CreateListingPage />} />
        <Route path="/mylistings" element={<MyListingsPage />} />
        <Route path="/mylistings/edit/:id" element={<EditMyListingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
