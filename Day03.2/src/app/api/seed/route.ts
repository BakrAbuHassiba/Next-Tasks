import { dbConnect } from "@/lib/database";
import Movie from "@/models/Movie";
import { IMDBApiMovie } from "@/types/movie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const exists = await Movie.findOne({});
  if (exists) return res.status(200).json({ message: "Already seeded" });

  const response = await fetch("https://filmy-dusky.vercel.app");
  const data = await response.json();
  const moviesArray = data.movies ?? [];

  const movies = data.titles.map((item: IMDBApiMovie) => ({
    title: item.primaryTitle,
    original_title: item.originalTitle ?? null,
    image_url: item.primaryImage?.url ?? null,
    year: item.startYear ?? null,
    runtime: item.runtimeSeconds
      ? Math.floor(item.runtimeSeconds / 60)
      : null,
    rating: item.rating?.aggregateRating ?? null,
    votes: item.rating?.voteCount ?? null,
    genres: item.genres ?? [],
    plot: item.plot ?? null,
  }));

  await Movie.insertMany(movies);

  res.status(201).json({ message: "Seeded successfully" });
}
