import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    addres: String,
    city: String,
    state: String,
    password: String,
    role: {}
});

export const Client = mongoose.model('Client', clientSchema);