const router = require("express").Router();
const orderService = require("../services/orderService");
const { isAuth } = require("./../middlewares/authMiddleware");


router.get("/binds", isAuth, async (req, res) => {
  const { search, from, to } = req.query;
  const orders = await orderService.getAll(search, from, to);

  res.render("binds", { orders, search, from, to });
});



module.exports = router;
