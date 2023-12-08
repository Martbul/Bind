const router = require("express").Router();
const userService = require("../services/userService");
//const decoder = require('../lib/tokenDecoder')
//const jwt = require("jsonwebtoken");
//const {SECRET} = require('../constants'
//import { jwtDecode } from "jwt-decode";
const jwtDecode = require("jwt-decode");
const { extractErrorMsgs } = require("../utils/errorHandler");
//const isStrongPassword = require("validator/lib/isStrongPassword");
//const isEmail = require("validator/lib/isEmail");




router.post("/singup", async (req, res) => {
  const { username, email, password } = req.body;
  //console.log(req.body.username);

  try {
    const decodedToken = await userService.singup({ username,email, password });
    //! u need to make jwt work, but for the SFPROJECT DEFENCE I WILL USE AS A RESULT THE GIVEN 
    //!USERNAME AND EMAIL WITHOUT USING THE RESULT
  //  const decodedUsername = jwtDecode(`'${result}'`)
    //console.log(username1);
//console.log(result);
    //let decodedToken = decoder(result)
    //console.log('DECODED TOKEN   ' + decodedToken);
   // res.cookie("auth", token, { httpOnly: true });
   res.json(
    decodedToken
   // username,email
   );
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
    console.log(errorMessages);
    return errorMessages
   // res.status(404).render("singUp", { errorMessages });
  }
});


router.post("/login", async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const decodedToken = await userService.login(  email, password );

   // const decoded = await jwt.decode(result, SECRET);
    // let decodedToken = decoder(result)
  //  console.log('DECODED TOKEN   ' + decoded.username);
    // console.log("TOKEN111111111" + token);
  
    //res.cookie("auth", result, { httpOnly: true });
      res.json(decodedToken)
    
  } catch (error) {
    const errorMessages = extractErrorMsgs(error);
   return Error
  }
});



router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.clearCookie("authDeliver");
  res.redirect("/");
});






module.exports = router;
