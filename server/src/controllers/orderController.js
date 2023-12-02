const router = require("express").Router();
const orderService = require("../services/orderService");


router.post("/order", async (req, res) => {
    
  const {
    fullname,
    address,
    dayForDelivery,
    timeForDelivery,
    order,
    email,
    username,
  } = req.body;
 // console.log(email);
      
  try {
    //console.log(req.body);
  
    
    // console.log(req.body);
    //! dobarvi nqkaksi tuk da vrushtah ordur id za da move posle da go vzema i posle da rendurna ordura v prole page

     await orderService.create({
      fullname,
      order,
      address,
      dayForDelivery,
      timeForDelivery,
      _ownerEmail: email,
    });
    res.status(201).end();
    console.log("new order saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});




module.exports = router;
