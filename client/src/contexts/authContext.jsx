import { createContext } from "react";
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

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
      
        const result = await authService.login(formValues.email, formValues.password);




       // console.log(result);



        setAuth(result);



        localStorage.setItem('accessToken', result);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (formValues) => {
     
      let result = await authService.register(formValues.username,formValues.email, formValues.password);
     // console.log('result '+ result);
      console.log(result);
     
       setAuth(result); 

        localStorage.setItem('accessToken', result);
       // console.log(jwtDecode(`'${auth}'`).username);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    // const userData = ()=>{
    //     const userData={}
    //     if(auth){
    //         userData.username = jwtDecode(`'${auth}'`).username
    //         userData.email = jwtDecode(`'${auth}'`).email
    //         userData.userId = jwtDecode(`'${auth}'`).userId
    //         userData.isAuthenticated = !!jwtDecode(`'${auth}'`)
    //     }
    //     return userData
    // }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        // username:function(){
        //     if(auth){
        //        return jwtDecode(`'${auth}'`).username
        //     }
        // }
    //   username: auth=={} ?   undefined:jwtDecode(`'${auth}'`).username,
    //   email: auth=={} ? undefined:jwtDecode(`'${auth}'`).email  ,
    //  userId: auth=={} ? undefined:jwtDecode(`'${auth}'`)._id ,
    //    isAuthenticated:   !!jwtDecode(`'${auth}'`) ,
       
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;