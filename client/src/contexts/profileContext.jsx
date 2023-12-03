import { createContext, useState } from "react";
import * as profileService from '../services/profileService';
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
   const [userOrder, setOrder] = useState('')
   const [userFirstName, setUserFirstName] = useState('')
   const [userLastName, setUserLastName] = useState('')
   const [userCountry, setUserCountry] = useState('')
   const [userCity, setUserCity] = useState('')
   const [userPhoneNumber, setUserPhoneNumber] = useState('')
   const [userAboutMeText, setUserAboutMeText] = useState('')

  
  
   const profileInfoHandler = async (email) => {
     console.log(email);

     
    try {
         
      const profileData = await profileService.getProfileData(email);
      console.log(profileData);
 
    } catch (message) {
        console.log(message);
    }

   
  };

     // add logic to get one user from db , them populate the values with useState, then use values in profile page to populate users firstname, lastname, order e.g.
   


   const values = {
     profileInfoHandler,
     userOrder,
     userFirstName,
     userLastName,
     userCountry,
     userCity,
     userPhoneNumber,
     userAboutMeText,
   };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

ProfileContext.displayName = "ProfileContext";

export default ProfileContext;
