import { createContext, useState } from "react";

const BindsContext = createContext();

export const BindsProvider = ({ children }) => {

   const [searchproduct, setSearchProduct] = useState('')
   

   const searchSubmitHandler = async (formValues) => {
     //console.log(formValues);
     setSearchProduct(formValues.searchproduct);
   
    
  };


   const values = {
     searchSubmitHandler,
     searchproduct
   };

  return <BindsContext.Provider value={values}>{children}</BindsContext.Provider>;
};

BindsContext.displayName = "BindsContext";

export default BindsContext;
