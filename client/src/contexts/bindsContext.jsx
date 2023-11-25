import { createContext, useState } from "react";

const BindsContext = createContext();

export const BindsProvider = ({ children }) => {

   const [search, setSearch] = useState('')

   const searchSubmitHandler = async (formValues) => {
     
      setSearch(formValues.search);
    
  };


   const values = {
     searchSubmitHandler,
    search,
  };

  return <BindsContext.Provider value={values}>{children}</BindsContext.Provider>;
};

BindsContext.displayName = "BindsContext";

export default BindsContext;
