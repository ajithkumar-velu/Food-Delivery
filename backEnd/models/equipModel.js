import mongoose from "mongoose";

const equipSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:true},
    image:{type:String, required:true},
    category: {type:String, required: true}
})
const equipModel = mongoose.models.equip || mongoose.model("equip", equipSchema);

export default equipModel;