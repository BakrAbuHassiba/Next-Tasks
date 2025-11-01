import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import MoviesList from '@/components/movies/MoviesList';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import { Movie } from '@/types/movie';

type MoviesPageProps = {
  movies: Movie[];
};

export default function MoviesPage({ movies }: MoviesPageProps) {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>

      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Watch now</h1>

          <Link href="/movies/new">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create Movie
            </Button>
          </Link>
        </div>

        {/* Pass the correct movies array */}
        <MoviesList movies={movies} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
    const data = await res.json();

    // Extract the array from the API response
    const movies = data.movies ?? [];

    return {
      props: { movies },
      revalidate: 86400, // 24 hours
    };
  } catch (error) {
    console.error(error);
    return {
      props: { movies: [] }, // fallback to empty array
    };
  }
};
