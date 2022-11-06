import mongoose from "mongoose";

const inventaryScheema = new mongoose.Schema({
    id: String,
    name: String,
    stok: Number,
    sales: Number,
    store: String,
    city: String,
});
export const Inventary = mongoose.model('Ineventary', inventaryScheema);