const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    username: { type: Schema.Types.ObjectId, ref: "User" },
    firstName: { type: Schema.Types.ObjectId, ref: "User" },
    
    title: String,
    content: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }]
  },
  {
    timestamps: true
  }
);

const Post = model("Post", postSchema);

module.exports = Post;