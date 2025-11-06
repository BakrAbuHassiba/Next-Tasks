import { NextResponse } from "next/server";
import connectDB from "@/lib/database";
import Movie from "@/models/Movie";

export async function GET() {
  try {
    await connectDB();
    const movies = await Movie.find({});
    return NextResponse.json(movies); 
  } catch (err) {
    console.error("Error fetching movies:", err);
    return NextResponse.json({ error: "Failed to fetch movies" }, { status: 500 });
  }
}
