//const jwt = require('../lib/jwt');
const jwt = require("jsonwebtoken");

const {SECRET} = require('../constants')

//  exports.decoder =async (token)=>{
//     // const userData={}
// try {
//     const decodedToken = await jwt.verify(token,SECRET)
//     return decodedToken
// } catch (error) {
//     console.log(error);
// }

// }

// async function decoder(result){
//     //console.log(result);
//     try {
//         const decodedToken = await jwt.verify(result,SECRET)
//         return decodedToken
//     } catch (error) {
//         console.log(error);
//     }
// }

// module.exports = decoder

async function  decoder(result){
    //console.log(result);
    try {
        const decodedToken = await jwt.verify(result,SECRET)
        return decodedToken
    } catch (error) {
        console.log(error);
    }
}

module.exports = decoder