import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <div className="container py-10 mx-auto w-100 text-center">
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-6 text-muted-foreground">
          Oops! The page you are looking for does not exist.
        </p>

        <Link href="/">
          <Button>Go back Home</Button>
        </Link>
      </div>
    </>
  );
}
