import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import SignIn from "./Pages/SignUpIn/SignIn.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import AppProviders from "./Context/AppProvider.jsx";
import Favorite from "./Pages/Favorite/Favorite.jsx";
import Orders from "./Pages/Orders/Orders.jsx";
function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<SignIn />} />
          <Route path={`/guest/cart`} element={<Cart />} />
          <Route path={`/guest/favorite`} element={<Favorite />} />
          <Route path={`/orders`} element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
