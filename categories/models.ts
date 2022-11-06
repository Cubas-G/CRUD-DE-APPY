import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    Slug: String
});
export const Category = mongoose.model('Category', CategoriesSchema);