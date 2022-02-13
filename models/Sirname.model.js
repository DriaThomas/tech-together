
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
 
  
  lastName: { type: String, required: true  },

  sirname: { type: String},
  gift: {type:String},
  description: {type:String},
  member:{ type: Schema.Types.ObjectId, ref: "User" },


  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  // profilePic: { type: String, required: false },
});

const Sirname = model("Sirname", userSchema);

module.exports = Sirname;