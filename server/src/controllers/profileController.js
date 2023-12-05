const router = require("express").Router();
const profileService = require("../services/profileService");
//const { isAuth } = require("./../middlewares/authMiddleware");


//! profle page is fucked
router.post('/',async (req,res)=>{
    const {email} = req.body
  
    try {
        const profileData = await profileService.getProfileData(email)
    res.json(profileData).status(200).end();
    console.log('userData deliverd');
    } catch (message) {
        res.status(400).json({ message }); 
    }
     
})




router.put("/:email", async (req, res) => {
   
    try {
      const { email } = req.params;
      //console.log(email);
      
  
      const { userAboutMeText,userCity,userCountry,userEmail,userFirstName,userLastName,userOrder,userPhoneNumber,userUsername } =
        req.body;
  
      const profileData = {
        userAboutMeText,userCity,userCountry,userEmail,userFirstName,userLastName,userOrder,userPhoneNumber,userUsername
        // _ownerId: req.user._id,
      };
     //console.log(profileData);
  
      await profileService.update(email, profileData);
  
      res.json(profileData).status(200).end();
    } catch (message) {
      res.status(400).json({ message });
    }
  });
module.exports = router;
