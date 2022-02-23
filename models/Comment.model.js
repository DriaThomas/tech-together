const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    username: { type: Schema.Types.ObjectId, ref: "User" },
    content: String,
    relationship: String,
    firstName: { type: Schema.Types.ObjectId, ref: "User" },
  
  },
  {
    timestamps: true
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;