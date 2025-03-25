import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/nav/Nav.jsx";
import LandingPage from "./Pages/LandingPage/LandingPage.jsx";
import { useState } from "react";
import SignIn from "./Pages/SignUpIn/SignIn.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
function App() {
  const [user, setUser] = useState("Guest");
  return (
    <BrowserRouter>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/logIn"
          element={<SignIn user={user} setUser={setUser} />}
        />
        <Route path={`/${user}/cart`} element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
