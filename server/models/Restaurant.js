import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, default: 0 },
  priceRange: { type: String, required: true },
  menu: [
    {
      name: String,
      price: Number,
      description: String,
    }
  ]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
