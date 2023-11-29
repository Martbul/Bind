const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const {jwtDecode} = require('jwt-decode')
const { SECRET } = require("../constants");
const { body } = require('express-validator');

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
  const user = await User.create(userData);

const token = await getToken(user);

//console.log('token' + token);
const decodedToken = jwtDecode(token)
console.log('token =  '+decodedToken);
//console.log(token);

return decodedToken;
};



exports.login = async (email, password) => {

  const user = await User.findOne({email});
  

  if (!user) {
    throw new Error("invalid username!!!!!!!!! or password");
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
