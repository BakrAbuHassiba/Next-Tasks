import MovieItem from './MovieItem';
import { Movie } from '@/types/movie';

type MoviesListProps = {
  movies: Movie[];
};

export default function MoviesList({ movies }: MoviesListProps) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieItem movie={movie} key={movie._id} />
      ))}
    </ul>
  );
}

