import { createContext, useState } from "react";

const BindsContext = createContext();

export const BindsProvider = ({ children }) => {

   const [searchorder, setSearchOrder] = useState('')
   const [searchcity, setSearchCity] = useState('')
   const [searchday, setSearchDay] = useState('')

   const searchSubmitHandler = async (formValues) => {
     //console.log(formValues);
     setSearchOrder(formValues.searchorder);
     setSearchCity(formValues.searchcity);
     setSearchDay(formValues.searchday);
    
  };


   const values = {
     searchSubmitHandler,
     searchorder,
     searchcity,
     searchday
  };

  return <BindsContext.Provider value={values}>{children}</BindsContext.Provider>;
};

BindsContext.displayName = "BindsContext";

export default BindsContext;
