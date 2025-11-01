import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="container py-10 mx-auto w-100 text-center">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p>
          Filmy is a simple app to view, save, and track your favorite
          movies and series.
        </p>
      </div>
    </>
  );
}
