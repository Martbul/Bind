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

router.get("/binds/:bindId", async (req, res) => {
  const bindId = req.params.bindId;

  const bind = await bindService.getSingleBind(bindId).lean();

  if (!bind) {
    return;
  }
  res.json(bind);

  //res.render("details");
});

router.put("/binds/:bindId", async (req, res) => {
  try {
    const { bindId } = req.params;
    console.log(bindId);
    

    const { fullname, address, dayForDelivery, timeForDelivery, order, email } =
      req.body;

    const bindData = {
      fullname,
      address,
      dayForDelivery,
      timeForDelivery,
      order
      // _ownerId: req.user._id,
    };
    console.log(bindData);

    await bindService.update(bindId, bindData);

    res.json(bindData).status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.delete("/binds/:bindId", async (req, res) => {
  //console.log("kurec");
  try {
    const { bindId } = req.params;
    // console.log(bindId);
    await bindService.delete(bindId);
    res.status(200).end();
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
