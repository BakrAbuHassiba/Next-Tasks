import Link from "next/link";
import { Card, CardContent } from "@/app/components/ui/card";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`, {
    cache: "no-store",
  });

  let movies: any[] = [];

  try {
    const data = await res.json();
    movies = Array.isArray(data.movies) ? data.movies : [];
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Hero Section */}
      <div className="text-center py-16 px-4 md:px-0">
        <h1 className="text-5xl font-bold text-red-500 mb-4">Filmy</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Discover and explore your favorite movies. Browse genres, ratings, and directors all in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-16 pb-16">
        {movies.length > 0 ? (
          movies.map((movie: any) => (
            <Link key={movie._id} href={`/movies/${movie._id}`}>
              <Card className="bg-gray-800 text-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform duration-300">
                <CardContent className="p-0">
                  <img
                    src={movie.image || "/placeholder.png"}
                    alt={movie.title}
                    className="rounded-t-xl w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{movie.genre.join(", ")}</p>
                    <p className="text-yellow-400 font-semibold">⭐ {movie.rating}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
}
