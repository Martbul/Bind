import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from "../services/authService";
import usePersistedState from "../hooks/usePersistedState";
import Path from "../paths";

const DeliverAuthContext = createContext();

export const DeliverAuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [deliverAuth, setDeliverAuth] = usePersistedState("deliverAuth", {});
  const [errors, setErrors] = useState("");

  const deliverLoginSubmitHandler = async (formValues) => {


    
    const result = await authService.login(
      formValues.email,
      formValues.password
    );
    console.log(result);
    // console.log(result);
    setAuth(result);
    localStorage.setItem("accessToken", `'${result}'`);

    navigate(Path.Home);
  };

  const deliverRegisterSubmitHandler = async (formValues) => {
    if (
      formValues.username.length < 3 ||
      typeof formValues.fullname != "string"
    ) {
      setErrors("Please enter a valid username");
      //throw new Error('Please enter a valid username')
    }

    let result = await authService.register(
      formValues.username,
      formValues.email,
      formValues.password
    );

    console.log(result);
    setAuth(result);

    localStorage.setItem("accessToken", `'${result}'`);

    setErrors("");
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    deliverLoginSubmitHandler,
    deliverRegisterSubmitHandler,
    logoutHandler,

    username: auth.username,
    email: auth.email,
    isAuthenticated: !!auth.email,
    errors: errors,
  };

  return (
    <DeliverAuthContext.Provider value={values}>
      {children}
    </DeliverAuthContext.Provider>
  );
};

DeliverAuthContext.displayName = "DeliverAuthContext";

export default DeliverAuthContext;
