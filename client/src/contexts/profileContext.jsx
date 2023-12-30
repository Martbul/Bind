import { createContext, useState } from "react";
import * as profileService from '../services/profileService';
const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

const [profileData,setProfileData] = useState('')
  
  
   const profileInfoHandler = async (email) => {
    // console.log(email);

     
    try {
         
      const profileData = await profileService.getProfileData(email);
    //  console.log(profileData);
      setProfileData(profileData)
 
    } catch (message) {
        console.log(message);
    }

   
  };

     // add logic to get one user from db , them populate the values with useState, then use values in profile page to populate users firstname, lastname, order e.g.
   


   const values = {
     profileInfoHandler,
     userOrder: profileData.order,
     userOrderId: profileData._id,
     userFirstName: profileData.firstName,
     userLastName: profileData.lastName,
     userCountry: profileData.country,
     userCity: profileData.city,
     userPhoneNumber: profileData.phoneNumber,
     userAboutMeText: profileData.aboutMe,
   };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

ProfileContext.displayName = "ProfileContext";

export default ProfileContext;
