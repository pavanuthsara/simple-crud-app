const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from node api hoo");
});

app.post('/api/products', async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product); 
    } catch(error) {
        res.status(500),json({message: error.message});
    }
});

mongoose.connect("mongodb+srv://uthsarapavan:p0ZdHgqVX0pMK6Iw@backenddb.2gmux.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
    console.log("connected to database");  
    
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch(() => {
    console.log("database connection falied");
})