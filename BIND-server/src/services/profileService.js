const User = require("../models/User");

exports.getProfileData = async (email) => {
  const profileData = await User.findOne({ email: email });

  console.log(profileData);
  return profileData;
};



//! oshte malko imash za updatejt
exports.update = (email, profileData) => {
  console.log(email);
  console.log(profileData);
  return User.findOneAndUpdate(
    { email },
    {
      firstName: profileData.userFirstName,
      lastName: profileData.userLastName,
      order: profileData.userOrder,
      country: profileData.userCountry,
      city: profileData.userCity,
      phoneNumber: profileData.userPhoneNumber,
      aboutMe: profileData.userAboutMeText,
    },
    { new: true }
  );
};
