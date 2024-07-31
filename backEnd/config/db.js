import mongoose from "mongoose";
export const connectDb = async () => {

    await mongoose.connect('mongodb+srv://ajith:qwertyuiop@cluster0.td0eexi.mongodb.net/agri-equip').then(()=>console.log("DB Connected"));
}