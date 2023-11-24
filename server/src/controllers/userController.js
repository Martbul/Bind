const router = require("express").Router();
const userService = require("../services/userService");
//const decoder = require('../lib/tokenDecoder')
//const jwt = require("jsonwebtoken");
//const {SECRET} = require('../constants')
const { extractErrorMsgs } = require("../utils/errorHandler");
//const isStrongPassword = require("validator/lib/isStrongPassword");
//const isEmail = require("validator/lib/isEmail");




router.post("/singup", async (req, res) => {
  const { username, email, password } = req.body;
  //console.log(req.body.username);

  try {
    const result = await userService.singup({ username,email, password });
console.log(result);
    //let decodedToken = decoder(result)
    //console.log('DECODED TOKEN   ' + decodedToken);
   // res.cookie("auth", token, { httpOnly: true });
   res.json(result);
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    console.log(errorMessages);
   // res.status(404).render("singUp", { errorMessages });
  }
});


router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const result = await userService.login(  email, password );

   // const decoded = await jwt.decode(result, SECRET);
    // let decodedToken = decoder(result)
  //  console.log('DECODED TOKEN   ' + decoded.username);
    // console.log("TOKEN111111111" + token);
  
    //res.cookie("auth", result, { httpOnly: true });
      res.json(result)
    
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
   console.log(errorMessages);
  }
});

router.get('/profile', async(req, res) => {
  const user = req.user
  //console.log(user);

  const myProfile = await userService.getMyProfile(user._id).lean()
 // console.log(myProfile);
 // res.render('profile',{ myProfile})
})

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.clearCookie("authDeliver");
  res.redirect("/");
});

module.exports = router;
