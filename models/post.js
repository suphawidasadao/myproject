import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    name: String,
    type: String,
    transmission: String,
    seats: Number,
    fuel: String,
    engine: Number,
    doors: Number,
    luggage: Number,
    province: String,
    price: Number,
    images: [String],  // Array of image URLs
    locations: [{ place: String, fee: Number }],  // Array of objects with place and fee
    features: [String],
    safety: [String],
    status: { 
        type: String, 
        default: 'available'  // Set default status to 'available'
    }
});


const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
