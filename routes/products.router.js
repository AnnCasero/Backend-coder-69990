import express from "express";
const router = express.Router;
import fs from "fs";
import path from "path";

const productsFilePath = path.resolve("./src/data/products.json");


router.get("/api/products", (req, res) => {
    res.json(products);   
})


//Get cart
const getCarts = () => {
    try {
      const data = fs.readFileSync(cartsFilePath, "utf-8");
      return JSON.parse(data) || [];
    } catch (error) {
      console.error("Error reading carts file:", error);
      return [];
    }
  };
  
  //Save Cart
  const saveCarts = (carts) => {
    try {
      fs.writeFileSync(cartsFilePath, JSON.stringify(carts, null, 2));
    } catch (error) {
      console.error("Error saving carts file:", error);
    }
  };
  
  //Get products
  const getProducts = () => {
    try {
      const data = fs.readFileSync(productsFilePath, "utf-8");
      return JSON.parse(data) || [];
    } catch (error) {
      console.error("Error reading products file:", error);
      return [];
    }
  };

//Create product
router.post ("/api/products", (req, res) => {
    const {
        title,
        description,
        code,
        price,
        status = true,
        stock,
        category,
        thumbnails = [],
      } = req.body;

      if (!title|| !description || !code || !price || !stock || !category) {
        return res.status(400).json({message: "400 Bad Request. The next fields are required :Title, description, code,  price, stock, category"});

      };

      const newProduct = {
        id: id.toString(),
        title,
        description,
        code,
        price,
        status,
        stock,
        category,
        thumbnails,
      };
      products.push(newProduct);
      saveProducts(products);
       res.status(201).json({message: "201 Created. Product created successfully"});
   });

 //Get product by ID.
router.get("/:pid", (req, res) => {
    const products = getProducts();
    const product = products.find((p) => p.id === req.params.pid);
    if (product) {
      res.json(product);
    } else {
      res
        .status(404)
        .json({ message: ` 404 Not Found. ID ${req.params.pid} was not found` });
    }
  });
   export default router;
