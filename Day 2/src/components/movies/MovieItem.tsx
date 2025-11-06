import Image from "next/image";
import { Movie } from "@/types/movie";
import Link from "next/link";

type MovieItemProps = { movie: Movie };

export default function MovieItem({ movie }: MovieItemProps) {
  const poster = movie.image || "/images/placeholder.svg";
  console.log("Poster value:", poster);
  // Validate poster source
  const validPoster =
    poster && (poster.startsWith("/") || poster.startsWith("http"))
      ? poster
      : "/images/placeholder.svg"; // 👈 fallback image from /public/images/
  return (
    <Link href={`/movies/${movie._id}`}>
      <li className="w-60 h-96 bg-gradient-to-br from-black via-red-900 to-red-700 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 border border-red-800 overflow-hidden flex flex-col">
        <div className="relative w-full h-2/3">
          <Image
            src={validPoster}
            alt={movie.title || "Movie poster"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="/images/placeholder.svg"
          />
        </div>

        <div className="p-4 text-white flex flex-col gap-1 h-1/3">
          <h2 className="font-bold text-lg">
            {movie.title} {movie.releaseYear && `(${movie.releaseYear})`}
          </h2>

          {movie.rating !== undefined && (
            <p className="text-sm text-yellow-400">⭐ {movie.rating}</p>
          )}

          {movie.genre && movie.genre.length > 0 && (
            <p className="text-xs text-red-200 truncate">
              {movie.genre.join(", ")}
            </p>
          )}
        </div>
      </li>
    </Link>
  );
}
