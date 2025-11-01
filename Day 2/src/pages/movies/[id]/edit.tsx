import { GetServerSideProps } from 'next';
import MovieForm from '@/components/movies/MovieForm';
import { Movie } from '@/types/movie';

type EditMoviePageProps = {
  movie: Movie;
};

export default function EditMoviePage({ movie }: EditMoviePageProps) {
  const initialValues = {
    _id: movie._id,
    title: movie.title,
    description: movie.description ?? '',
    image: movie.image ?? '',
    releaseYear: movie.releaseYear ?? undefined,
    duration: movie.duration ?? undefined,
    genre: movie.genre?.join(', ') ?? '',
    rating: movie.rating ?? undefined,
    views: movie.views ?? undefined,
    director: movie.director ?? '',
    cast: movie.cast?.join(', ') ?? '',
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Movie</h1>
      <MovieForm type="edit" initialValues={initialValues} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
  );
  if (!res.ok) return { notFound: true };

  const movie: Movie = await res.json();
  return { props: { movie } };
};
