const router = require("express").Router();
const bindService = require("../services/bindsService");
//const { isAuth } = require("./../middlewares/authMiddleware");

router.get("/binds", async (req, res) => {
 

  try {
    //  const orders = await orderService.getAll(search, from, to);
    const binds = await bindService.getAll();
    
    res.json(binds);
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.get("/binds/:bindId", async (req, res) => {
  const bindId = req.params.bindId;

  const bind = await bindService.getSingleBind(bindId).lean();

  if (!bind) {
    return;
  }
  res.json(bind);


});

router.put("/binds/:bindId", async (req, res) => {
  try {
    const { bindId } = req.params;

     const { userOrder } = req.body;
    

    const bindData = {
      order:userOrder,
   
    };

    await bindService.update(bindId, bindData);

    res.json(bindData).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.delete("/binds/:bindId", async (req, res) => {
  try {
    const { bindId } = req.params;
    // console.log(bindId);
    await bindService.delete(bindId);
    res.json(bindId).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.post("/binds/like", async (req, res) => {
  const { email } = req.body;
  const { bindId } = req.body;

  const result = await bindService.addLikeToBind(bindId, email);

  res.json(result).status(200).end();
});

// router.post('/binds/:bindId', async (req, res) => {
//   console.log('here');
//   console.log(req.body);
// })

module.exports = router;
