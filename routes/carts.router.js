import { Router} from "express";
import fs from "fs";
import path from "path";
const router = Router();


const carts = [];
const cartsFilePath = path.resolve('src/data/carts.json');
const productsFilePath = path.resolve("./src/data/products.json");


router.get("/api/carts", (req, res) => {
    res.json(carts);   
})
   export default router;