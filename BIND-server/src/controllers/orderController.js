const router = require("express").Router();
const orderService = require("../services/orderService");
const userService = require("../services/userService");

router.post("/order", async (req, res) => {
  console.log(req.body);
  const { productAndQuantity, email } = req.body;

  try {
    // await orderService.create({
    //   fullname,
    //   order,
    //   address,
    //   dayForDelivery,
    //   timeForDelivery,
    //   _ownerEmail: email,
    // });

    await userService.addOrderToUser(
      {
        productAndQuantity,
      },
      email
    );

    res.status(201).end();
    console.log("new order saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});

router.post("/setDayAndTime", async (req, res) => {
  const { dayAndTimeForDelivery, address, email } = req.body;

  try {
    await userService.setDayAndTimeForDelivery(
      {
        dayAndTimeForDelivery,
      },
      address,
      email
    );

    res.status(201).end();
    console.log("new order saved");
  } catch (message) {
    res.status(400).json({ message });
  }
});

module.exports = router;
