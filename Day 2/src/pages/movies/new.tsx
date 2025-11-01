import Head from 'next/head';
import Link from 'next/link';

import MovieForm from '@/components/movies/MovieForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NewMoviePage() {
  return (
    <>
      <Head>
        <title>Add Movie</title>
      </Head>

      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="bg-background py-2 flex justify-between items-center">
          <Link href="/movies">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to movies
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Add Movie</h1>
        <MovieForm type="create" />
      </div>
    </>
  );
}
