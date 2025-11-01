import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Filmy</title>
      </Head>
      <div className="text-center space-y-6 mt-20">
        <h1 className="text-4xl font-bold">Welcome to Filmy</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Explore movies and series using a public API. Built with Shadcn UI and
          Next.js.
        </p>
        <Link href="/movies">
          <Button size="lg">Browse Movies</Button>
        </Link>
      </div>
    </>
  );
}
