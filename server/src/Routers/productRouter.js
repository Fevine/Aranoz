import express from 'express'
import { CreateProduct, DeleteProductByID, GetAllProducts, GetProductByID } from "./../Controllers/productController.js";

export const productRouter = express.Router()

// Post

productRouter.post('/create', CreateProduct)


// Get

productRouter.get('/get-all', GetAllProducts)

productRouter.get('/get-by-id/:id', GetProductByID)


// Delete

productRouter.delete('/delete-by-id/:id', DeleteProductByID)
