const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("test is working");
};

// register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({ error: "Name is required" });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email is already being used" });
    }

    const hashedPassword = await hashPassword(password);
    // Assuming you've handled all input validations above this point
    const user = await User.create({ name, email, password: hashedPassword });

    // Upon successful creation, return a success message
    return res.json({ message: "User registered successfully" }); // This line sends a success response
  } catch (error) {
    // If an error occurs during the process, catch it and return an error response
    return res.status(500).json({ error: "An error occurred on the server." });
  }
};

// login endpoint

const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }

    const match = await comparePassword(password, user.password); // password from login body compared to user password
    if (match) {
      // signing web token with all user information
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            throw err;
          }
          res // portraying cookies
            .cookie("token", token, { httpOnly: true, secure: true })
            .json({ message: "Login successful" });
        }
      );
    } else {
      return res.json({ error: "Incorrect password" }); // Send error message if passwords don't match
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "An error occurred on the server." });
  }
};

const getAccount = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    // verifing the token
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

const logout = (req, res) => {
  // If using httpOnly cookies to store the token, clear the cookie
  res.clearCookie("token");

  res.json({ message: "Logged out successfully" });
};

module.exports = {
  test,
  registerUser,
  signInUser,
  getAccount,
  logout,
};
