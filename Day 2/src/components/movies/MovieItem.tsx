import Image from 'next/image';
import { Movie } from '@/types/movie';
import Link from 'next/link';

type MovieItemProps = { movie: Movie };

export default function MovieItem({ movie }: MovieItemProps) {
  const poster = movie.image || '/images/placeholder.svg';

  return (
    <Link href={`/movies/${movie._id}`}>
      <li className="p-4 rounded-lg border shadow-sm hover:bg-accent transition flex items-start gap-4">
        <div className="relative w-20 h-[120px] shrink-0">
          <Image
            src={poster}
            alt={movie.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="rounded-md object-cover"
            placeholder="blur"
            blurDataURL="/images/placeholder.svg"
          />
        </div>

        <div>
          <h2 className="font-semibold">
            {movie.title} {movie.releaseYear && `(${movie.releaseYear})`}
          </h2>

          {movie.rating !== undefined && (
            <p className="text-sm text-muted-foreground">⭐ {movie.rating}</p>
          )}

          {movie.genre && movie.genre.length > 0 && (
            <p className="text-xs text-muted-foreground">
              {movie.genre.join(', ')}
            </p>
          )}
        </div>
      </li>
    </Link>
  );
}
