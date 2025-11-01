import mongoose, { Schema, models } from "mongoose";

const movieSchema = new Schema(
  {
    imdb_id: String,
    title: String,
    original_title: String,
    image_url: String,
    year: Number,
    runtime: Number,
    rating: Number,
    votes: Number,
    genres: [String],
    plot: String,
  },
  { timestamps: true }
);

export default models.Movie || mongoose.model("Movie", movieSchema);
