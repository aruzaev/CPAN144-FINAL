const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  signInUser,
  getAccount,
  logout,
} = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", test);
router.post("/signup", registerUser);
router.post("/signin", signInUser);
router.get("/account", getAccount); // using get to get the accounts
router.post("/logout", logout);
module.exports = router;
