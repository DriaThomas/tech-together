const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

// localhost:3000/post-create
router.get("/post-create", (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render("posts/create", { dbUsers });
    })
    .catch((err) =>
      console.log(`Err while displaying post input page: ${err}`)
    );
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">

// ... your code here
router.post("/post-create", (req, res) => {
  const { username, title, content } = req.body;
  Post.create({ username, title, content }).then((postFromDB) => {
    res.redirect("/post-all");
  });
});

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

// ... your code here
router.get("/post-all", (req, res) => {
  Post.find()
    .populate("username")
    .then(async (postsFromDB) => {
      // const copyOfPosts = [];
      // for (let i = 0; i < postsFromDB.length; i++) {
      //   const author = await User.findById(postsFromDB[i].author);
      //   copyOfPosts.push({
      //     title: postsFromDB[i].title,
      //     content: postsFromDB[i].content,
      //     author: author.username,
      //   });
      // }
      console.log(postsFromDB);
    //   res.render("posts/list", postsFromDB);
    res.render("posts/list", postsFromDB);
    });
});

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

// ... your code here
router.get("/post/:id", (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .populate("username comments")
    .then((post) => {
      User.find().then((dbUsers) => {
        console.log(post);
        res.render("posts/details", { post, dbUsers });
      });
    });
});


router.get("/post/:id/:title", (req, res) => {
    const { title } = req.params.id;
    Post.findById(title)
      .populate("username comments")
      .then((post) => {
        User.find().then((dbUsers) => {

          console.log(post);
          res.render("tree", { post, dbUsers });
        });
      });
  });
  

module.exports = router;