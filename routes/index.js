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


// ********* require Book model in order to use it *********
const Sirname = require("../models/Sirname.model");


// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

// http://localhost:3000/books
// since we prefixed all routes with /books in the app.js when we connected the bookRoutes file with the whole app,
// here we don't have to specify /books, just the rest

// router.get("/family/add-review", (req, res, next) => {

//     // .find() - always returns an array
//     Sirname.find()
//     .then(allBooksFromDB => { // allBooksFromDB is a placeholder, you can name it however you want
//         // console.log("Here are the books from DB: ", allBooksFromDB);

//         res.render("book-pages/books-list", { books: allBooksFromDB, numberOfBooks: allBooksFromDB.length });
//     })
//     .catch(error => console.log("An error occurred while getting books from database: ", error )); // <--- .catch() - if some error happens handle it here
// });






module.exports = router;



// router.use("/auth", authRoutes);

