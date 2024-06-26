import mongoose from "mongoose";

const { Schema } = mongoose;

const proSchema = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
});

export const Product = mongoose.model('aranozPro', proSchema)
