import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { ArrowLeft } from 'lucide-react';

import { Movie } from '@/types/movie';

type MovieDetailsProps = {
  movie: Movie;
};

export default function MovieDetails({ movie }: MovieDetailsProps) {
  const router = useRouter();
  const {
    _id,
    title,
    description,
    image,
    releaseYear,
    duration,
    genre,
    rating,
    views,
    director,
    cast,
  } = movie;

  const [loading, setLoading] = useState(false);
  const poster = image || '/images/placeholder.svg';

  const handleDelete = async () => {
    setLoading(true);

    await fetch(`/api/movies/${_id}`, {
      method: 'DELETE',
    });

    setLoading(false);
    router.push('/movies');
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="bg-background py-2 flex justify-between items-center">
          <Link href="/movies">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to movies
            </Button>
          </Link>

          <div className="flex gap-2">
            <Link href={`/movies/${_id}/edit`}>
              <Button>Edit</Button>
            </Link>

            {/* Delete Dialog */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete</Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Movie</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This movie will be permanently
                    deleted.
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    {loading ? 'Deleting...' : 'Delete'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        <h1 className="text-3xl font-bold">{title}</h1>
        {director && <p className="text-muted-foreground italic">Directed by {director}</p>}

        <div className="w-full max-w-md mx-auto">
          <div className="relative aspect-2/3 rounded-xl overflow-hidden shadow-lg group">
            <Image
              src={poster}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL="/blur-placeholder.png"
            />
          </div>
        </div>

        <div className="space-y-2 text-lg">
          <p>
            <strong>Year:</strong> {releaseYear ?? 'N/A'}
          </p>
          <p>
            <strong>Duration:</strong> {duration ?? 'N/A'} min
          </p>
          <p>
            <strong>Genres:</strong> {genre?.length ? genre.join(', ') : 'N/A'}
          </p>
          <p>
            <strong>Rating:</strong> {rating ? `${rating} ⭐` : 'N/A'} (
            {views?.toLocaleString() ?? 0} views)
          </p>
          {cast?.length ? (
            <p>
              <strong>Cast:</strong> {cast.join(', ')}
            </p>
          ) : null}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p>{description || 'No description available.'}</p>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
  const data: Movie[] = await res.json();

  const paths = data.map((movie) => ({
    params: { id: movie._id },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${params?.id}`
  );
  const movie: Movie = await res.json();

  if (!movie?._id) return { notFound: true };

  return { props: { movie }, revalidate: 3600 };
};
