
import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import NotFound from "./components/not-found/NotFound";
import Profile from "./components/profile/Profile";
import SingUp from "./components/singup/SingUp";
import Order from "./components/order/Order";
import Login from "./components/login/Login";
import Binds from "./components/binds/Binds";
import BecomeADeliver from "./components/become-a-deliver/BecomeADeliver";


import "./style1.css";
import './public/scss2/main.scss'


function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders/order" element={<Order />} />
        <Route path="/beADeliver" element={<BecomeADeliver/>} />
        <Route path="/binds/binds" element={<Binds />} />
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
