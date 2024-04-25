import { Product } from "./../Models/productModel.js";


// Post

export async function CreateProduct(req, res) {
    try {
        const { title, image, price } = req.body;
        const pros = await Product.create({
            title,
            image,
            price,
        });
        await pros.save()
        res.status(200).send("Product Successfully Created!");
    } catch (error) {
        res.status(500).send("error");
    }
}


// Get

export async function GetAllProducts(req, res) {
    try {
        const pros = await Product.find();
        res.status(200).send(pros);
    } catch (error) {
        res.status(500).send("error");
    }
}

export async function GetProductByID(req, res) {
    try {
        const { id } = req.params;
        const pros = await Product.findById(id);
        res.status(200).send(pros);
    } catch (error) {
        res.status(500).send("error");
    }
}


// Delete

export async function DeleteProductByID(req, res) {
    try {
        const { id } = req.params;
        const pros = await Product.findByIdAndDelete(id);
        res.status(200).send("Product Successfully Deleted!");
    } catch (error) {
        res.status(500).send("error");
    }
}
