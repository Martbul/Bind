const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const {jwtDecode} = require('jwt-decode')
const { SECRET } = require("../constants");
// const { body } = require('express-validator');

async function validatePassword(password, userPassword) {
 
  const isValid = await bcrypt.compare( password, userPassword );
  //console.log(isValid);

  if (!isValid) {
    throw new Error("invalid email or password");
  }
}

async function getToken(user) {
  const payload = { username:user.username,_id: user._id, email: user.email };
  
  const token = await jwt.sign(payload, SECRET, { expiresIn: "3d" });

  return token;
}




exports.singup = async (userData) => {
  //console.log(userData);
  userData.firstName = ''
  userData.lastName = ''
  userData.order = Array
  userData.country = ''
  userData.city = ''
  userData.phoneNumber = ''
  userData.aboutMe = ''
  userData.imgUrl = ''
  // console.log(userData.order);
  // const emailTest = JSON.parse(userData.email)
  // if(await User.findOne(emailTest)){
  //   throw Error
  // }
  try {
    const user = await User.create(userData);

const token = await getToken(user);

//console.log('token' + token);
const decodedToken = jwtDecode(token)
console.log('token =  '+decodedToken);
//console.log(token);

return decodedToken;
  } catch ({message}) {
    console.log(message);
  }
  
};



exports.login = async (email, password) => {

  const user = await User.findOne({email});
  

  if (!user) {
    return ("invalid username!!!!!!!!! or password");
  }

  await validatePassword(password, user.password);

  const token = await getToken(user);
  const decodedToken = jwtDecode(token)
  console.log('token =  '+decodedToken);
  //console.log(token);

  return decodedToken;
};

exports.getMyProfile = (userId)=> 
  User.findById(userId)



  


exports.addOrderToUser = (productAndQuantity, email) => {
  console.log(productAndQuantity);
  // Find the user by ID
  console.log(email);
  User.findOneAndUpdate(
    { email: email },
    { $push: { order: productAndQuantity.productAndQuantity } },
    { new: true }
  )
    .then((updatedUser) => {
      //    console.log("Order added successfully to the user:", updatedUser);
    })
    .catch((error) => {
      console.error("Failed to update user with order:", error);
    });
};