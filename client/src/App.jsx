import { Routes, Route } from "react-router-dom";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

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




function App() {

  const navigate = useNavigate()
  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken')

    return {}
  })


  //!needs an error handling
  const loginSubmitHandler= async(formValues) =>{

    console.log(formValues);
    //! trqbva da napishsh survura da vrushta jwt token pri login zaqvka za da proraboti(mai)
    //! survura vrushda "data"
    const result = await authService.login(formValues.email, formValues.password)
    
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }

  //!needs an error handling
  const registerSubmitHandler = async(formValues) =>{
    //! trqbva da napishsh survura da vrushta jwt token pri register zaqvka za da proraboti(mai)
   const result = await authService.register(formValues.email, formValues.password)
  
   setAuth(result)
   
   localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }

  const logoutHandler =()=>{
    setAuth({})
    
    localStorage.removeItem('accessToken')
    
  }

  const values = {
    registerSubmitHandler,
    logoutHandler,
    loginSubmitHandler,
    username: auth.username || auth.email,
    email:auth.email,
    isAuthenticated: !!auth.accessToken
  }

  return (

    <AuthContext.Provider value={values}>
   
      <Navigation />

      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Orders} element={<Order />} />
        <Route path={Path.BeADeliver} element={<BecomeADeliver/>} />
        <Route path={Path.Binds} element={<Binds />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Profile} element={<Profile />} />
        <Route path={Path.SingUp} element={<SingUp />} />
        <Route path={Path.LogIn} element={<Login />} />
        <Route path={Path.WildCard} element={<NotFound />} />
      </Routes>

      <Footer />
      </AuthContext.Provider>
    
  );
}

export default App;
