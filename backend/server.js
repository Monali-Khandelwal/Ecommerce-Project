import express from 'express'; // to create webservice using express module
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true

   }).catch(error => console.log(error.reason));
//define app by running express function
const app= express();

//create endpoint with its path as first paramater and second parmater as handler function which responds to this request
app.use("/api/users", userRoute);
app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if (product)
        res.send();
    else
        res.status(404).send({msg: "Product Not Found."})
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// app.Listen command to run the server -  means express js will start running
app.listen(5002, () => { console.log("Server started at http://localhost:5002")});