import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [errorsLogin, setErrorsLogin] = useState("");
  const [errorsSingUp, setErrorsSignUp] = useState("");

  const loginSubmitHandler = async (formValues) => {
    try {
      const result = await authService.login(
        formValues.email,
        formValues.password
      );
      setAuth(result);
      localStorage.setItem("accessToken", `'${result}'`);

      navigate(Path.Home);
    } catch (error) {
      setErrorsLogin("Your email address or password is incorrect");
    }
  };


  const registerSubmitHandler = async (formValues) => {

    // try {
    //   if (formValues.username.length < 3) {
    //   setErrorsSignUp("Please enter a valid username");
    //   //throw new Error('Please enter a valid username')
    // }else if (formValues.email.length < 3) {
    //   //setErrorsSignUp("Please enter a longer email");
    //   throw new Error('Please enter a valid email')
    // } else if (
    //   !formValues.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    // ) {
    //  // setErrorsSignUp("Please enter a valid email");
    //   throw new Error('Please enter a valid email')
    // } else if (formValues.password.length < 6) {
    //   //setErrorsSignUp("Password must be at least 6 characters");
    //   throw new Error('Please enter a valid password')
    // }else{
    //   setErrorsSignUp('')
    // }

    // } catch (error) {
    //   if(error.message=='Please enter a valid username'){
    //     setErrorsSignUp('Please enter a valid username')
    //   }else if(error.message=='Please enter a valid password'){
    //     setErrorsSignUp('Please enter a valid password')
    //   }else if(error.message=='Please enter a valid email'){
    //     setErrorsSignUp('Please enter a valid email')
    //   }else {
    //     setErrorsSignUp('')
    // }}
    

    try {
      let result = await authService.register(
        formValues.username,
        formValues.email,
        formValues.password
      );
      console.log(result);

      console.log(result);
      setAuth(result);

      localStorage.setItem("accessToken", `'${result}'`);

      //setErrorsSignUp("");
      //navigate(Path.Home);
    } catch (error) {
      throw new Error('kurec')
    }
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,

    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
    errorsSingUp: errorsSingUp,
    errorsLogin: errorsLogin,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthContext.displayName = "AuthContext";

export default AuthContext;
