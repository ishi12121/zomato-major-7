import mongoose from "mongoose";

export default async () => {
  return mongoose.connect(process.env.Mongo_URL,);

};