import Home from './components/Home/Home'
import Navbar from "./components/Navbar/Navbar"
import NavbarContext from "./context/NavbarContext"
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [navbarContext, setNavbarContext] = useState("");

  return (
    <BrowserRouter>
      <NavbarContext.Provider value={{ navbarContext, setNavbarContext }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NavbarContext.Provider>
      <Footer />
    </BrowserRouter >
  )
}

export default App
