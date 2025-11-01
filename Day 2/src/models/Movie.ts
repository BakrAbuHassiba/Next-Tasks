import mongoose, { Schema, models } from "mongoose";

const movieSchema = new Schema(
  {
    title: String,
    description: String,
    genre: [String],       
    duration: Number,      
    releaseYear: Number,
    rating: Number,
    views: Number,
    director: String,      
    cast: [String],
    image: String,
    watchlist: [String],   
  },
  { timestamps: true }
);

export default models.Movie || mongoose.model("Movie", movieSchema);
