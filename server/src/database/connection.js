import mongoose from "mongoose";

export default async () => {
  return mongoose.connect("mongodb+srv://devtown:devtown10567@cluster0.gg0gdie.mongodb.net/?retryWrites=true&w=majority");

};