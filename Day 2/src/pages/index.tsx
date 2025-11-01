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
        <h1 className="text-4xl font-bold">Filmy Website</h1>
        <Link href="/movies">
          <Button size="lg">Watch Movies Now!!!</Button>
        </Link>
      </div>
    </>
  );
}
