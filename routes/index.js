const router = require("express").Router();
// const authRoutes = require("./auth");

/* GET home page */
// router.get("/", (req, res) => {
//   res.render("views/index");
// });
router.get("/", (req, res, next) => {
  res.render('', {});

});

module.exports = router;

// router.use("/auth", authRoutes);

module.exports = router;
