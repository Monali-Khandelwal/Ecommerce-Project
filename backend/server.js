import express from 'express'; // to create webservice using express module
import data from './data';

//define app by running express function
const app= express();

//create endpoint with its path as first paramater and second parmater as handler function which responds to this request

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