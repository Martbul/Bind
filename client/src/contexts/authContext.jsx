import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (formValues) => {
        const result = await authService.login(formValues.username,formValues.email, formValues.password);
      

        setAuth(result);

        localStorage.setItem('accessToken', result);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (formValues) => {
     
      const result = await authService.register(formValues.username,formValues.email, formValues.password);
     
       setAuth(result); 

        localStorage.setItem('accessToken', result);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
       // username: auth.username || auth.email,
       //  email: auth.email,
      //  userId: auth._id,
      //  isAuthenticated: !!auth.accessToken,
       
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;