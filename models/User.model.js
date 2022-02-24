// const { Schema, model } = require("mongoose");

// // TODO: Please make sure you edit the user model to whatever makes sense in this case
// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       // unique: true -> Ideally, should be unique, but its up to you
//     },
//     password: String,
//   },
//   {
//     // this second object adds extra properties: `createdAt` and `updatedAt`
//     timestamps: true,
//   }
// );

// const User = model("User", userSchema);

// module.exports = User;


const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  

    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
 
  // {
  //   timestamps: true,
  // }


  email: {
    type: String,
    unique: false,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  firstName: { type: String, required: true },
  title: {type:String},
  lastName: { type: String, required: true  },
  userName: { type: String },
  sirname: { type: String},
  gift: {type:String},
 
  
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  // profilePic: { type: String, required: false },
});

const User = model("User", userSchema);

module.exports = User;