import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/database";
import Movie from "@/models/Movie";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  const movie = await Movie.findById(params.id);
  if (!movie) {
    return NextResponse.json({ message: "Movie not found" }, { status: 404 });
  }
  return NextResponse.json(movie);
}



