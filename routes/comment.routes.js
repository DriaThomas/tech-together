const router = require("express").Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

router.post("/comment-create/:id", (req, res) => {
  const {content,firstName } = req.body;
  Comment.create({  content,firstName }).then((commentFromDB) => {
    console.log({ reqid: req.params.id });
    Post.findByIdAndUpdate(req.params.id, {
      $push: { comments: commentFromDB._id },
    }).then((postFromDB) => {
      console.log(postFromDB);
      res.redirect(`/post/${postFromDB._id}`);
    });
  });
});



module.exports = router;