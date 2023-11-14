
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import SingUp from "./components/SingUp";
import Order from "./components/Order";
import Login from "./components/Login";
import Binds from "./components/Binds";
import BecomeADeliver from "./components/BecomeADeliver";


import "./style1.css";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/beADeliver" element={<BecomeADeliver/>} />
        <Route path="/binds" element={<Binds />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
