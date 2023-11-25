const router = require("express").Router();
const bindService = require("../services/bindsService");
//const { isAuth } = require("./../middlewares/authMiddleware");


router.get("/binds", async (req, res) => {
   console.log(req);
  
 

  try {
  //  const orders = await orderService.getAll(search, from, to);
    const binds = await bindService.getAll();
    console.log(binds);
     res.json(binds);
   
  } catch (message) {
     res.status(400).json({ message });
  }

});



module.exports = router;
