import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Filmy — Explore movies, ratings, and reviews."
        />
        <meta
          name="keywords"
          content="Movies, Film Database, Reviews, Ratings, Filmy"
        />
        <meta name="author" content="Filmy" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-background text-foreground antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
