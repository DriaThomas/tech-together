const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    username: { type: Schema.Types.ObjectId, ref: "User" },
    content: String
  },
  {
    timestamps: true
  }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;