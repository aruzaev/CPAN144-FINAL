const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  signInUser,
} = require("../controllers/authController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3005",
  })
);

router.get("/", test);
router.post("/signup", registerUser);
router.post("/signin", signInUser);

module.exports = router;
