const router = require("express").Router();
const mongoose = require("mongoose");
// const authRoutes = require("./auth");
const User = require("../models/User.model");
const isLoggedOut = require('../middleware/isLoggedOut');
const isLoggedIn = require('../middleware/isLoggedIn');
/* GET home page */
router.get("/", (req, res) => {
  res.render("index");
});

// router.get("/dashboard", isLoggedIn,(req, res) => {
//   res.render("dashboard");
// });
// router.get("/", (req, res, next) => {
//   res.render('index', { isLoggedIn: user,});

// });



router.get("/dashboard", (req, res) => {
  const user = req.session.user;
  const user_id = mongoose.Types.ObjectId(user._id);
  User.findById(user_id).then((foundUser) => {
    res.render("dashboard.hbs", {
      userObject: foundUser,
      isLoggedIn: user,
    });
  });
});


router.post("/dashboard/:id", (req, res) => {
  const user = req.session.user;
  const user_id = mongoose.Types.ObjectId(user._id);
  Review.findById(user_id).then((foundUser) => {
    res.render("dashboard.hbs", {
      userObject: foundUser,
      isLoggedIn: user,
    });
  });
});

router.post("/family", (req, res) => {
  const user = req.session.user;
  const user_id = mongoose.Types.ObjectId(user._id);
  User.findById(user_id).then((foundUser) => {
    res.render("family-tree", {
      userObject: foundUser,
      isLoggedIn: user,
    });
  });
});

//////////////////////////////////////////////////////////////////////









module.exports = router;





