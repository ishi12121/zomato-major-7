import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
{
  images: [
    {
        Location: {type: String, required: true},
    },
  ],

},
 {
    timestamps: true
}
);

export const FoodModel = mongoose.model("images", ImageSchema )