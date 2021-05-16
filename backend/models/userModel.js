import mongoose from 'mongoose';

//define user schema-- which will decide how user will be saved in Mongo DB
const userSchema = new mongoose.Schema({
  name:{type: String, required:true },
  email:{type: String, required:true, unique:true, dropDups: true },
  password:{type: String, required:true},
  isAdmin:{type: Boolean, required:true, default: false}  
});

//Create user Model
const userModel = mongoose.model("User", userSchema);

export default userModel;