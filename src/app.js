import express from "express";
import multer from "multer";
const app = express();
const PUERTO = 8080;
import cartsRouter from "../routes/carts.router.js";
import productsRouter from "../routes/products.router.js"

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use ("/", productsRouter);
app.use("/", usersRouter);


app.listen(PUERTO, ()=> {
    console.log(`Server listening on port: ${PUERTO}`)
});
