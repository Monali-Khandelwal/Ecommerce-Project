import mongoose from 'mongoose';

//define user schema-- which will decide how user will be saved in Mongo DB
const productSchema = new mongoose.Schema({
  name:{type: String, required:true },
  image:{type: String, required:true },
  brand:{type: String, required:true },
  price:{type: Number, default: 0, required:true },
  category:{type: String, required:true },
  countInStock:{type: Number, default: 0, required:true },
  description:{type: String, required:true },
  rating:{type: Number, default: 0, required:true },
  numReviews:{type: Number, default:0, required:true },
});

//Create product Model
const productModel = mongoose.model("Product", productSchema);

export default productModel;