import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { AuthProvider } from './contexts/authContext';
import Path from "./paths"
import AuthContext from "./contexts/authContext"
import * as authService from "./services/authService" 

import Footer from "./components/footer/Footer";
import Navigation from "./components/navigation/Navigation";
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
import Logout from "./components/logout/Logout";
import LearnMore from "./components/learn-more/LearnMore";




function App() {

  return (


   <AuthProvider>
    <Navigation />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.LearnMore} element={<LearnMore />} />
        <Route path={Path.Orders} element={<Order />} />
        <Route path={Path.BeADeliver} element={<BecomeADeliver/>} />
        <Route path={Path.Binds} element={<Binds />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Profile} element={<Profile />} />
        <Route path={Path.SingUp} element={<SingUp />} />
        <Route path={Path.LogIn} element={<Login />} />
        <Route path={Path.Logout} element={<Logout />} />
        <Route path={Path.WildCard} element={<NotFound />} />
      </Routes>

      <Footer />
   </AuthProvider>
     
     
    
  );
}

export default App;
