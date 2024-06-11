import express from "express";

import cartsRouter from "../routes/carts.router.js";
import productsRouter from "../routes/products.router.js"

const app = express();
const PUERTO = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use ("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);


app.listen(PUERTO, ()=> {
    console.log(`Server listening on port: ${PUERTO}`)
});
