import { getMovieById } from "@/lib/api";

export default async function MoviePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movie = await getMovieById(id);

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-8 bg-gray-900 rounded-xl shadow-lg text-white">

      <img
        src={movie.image || "/placeholder.png"}
        alt={movie.title}
        className="rounded-lg w-full md:w-1/3 object-cover shadow-md"
      />


      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold">{movie.title}</h1>

        <p className="text-gray-300">{movie.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {movie.genre.map((g: string) => (
            <span
              key={g}
              className="px-3 py-1 bg-red-600 rounded-full text-sm font-medium"
            >
              {g}
            </span>
          ))}
        </div>

        <p className="text-gray-400 mt-4">
          <span className="font-semibold">Director:</span> {movie.director}
        </p>

        <p className="text-gray-400">
          <span className="font-semibold">Release Year:</span> {movie.releaseYear}
        </p>

        <p className="text-gray-400">
          <span className="font-semibold">Rating:</span> {movie.rating} / 10
        </p>

        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">Cast</h2>
          <ul className="list-disc list-inside text-gray-300">
            {movie.cast.map((actor: string) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
