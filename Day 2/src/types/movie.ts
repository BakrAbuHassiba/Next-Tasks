export interface Movie {
  _id: string;
  imdb_id?: string;
  title: string;
  original_title?: string | null;
  image_url?: string | null;
  year?: number | null;
  runtime?: number | null;
  genres: string[];
  rating?: number | null;
  votes?: number | null;
  plot?: string | null;
}

export type IMDBApiMovie = {
  id: string;
  primaryTitle: string;
  originalTitle?: string;
  primaryImage?: { url?: string };
  startYear?: number;
  runtimeSeconds?: number;
  rating?: {
    aggregateRating?: number;
    voteCount?: number;
  };
  genres?: string[];
  plot?: string;
};
