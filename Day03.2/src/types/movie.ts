export interface Movie {
  _id: string;
  title: string;
  description?: string | null;
  image?: string | null;
  releaseYear?: number | null;
  duration?: number | null;
  genre: string[];         
  rating?: number | null;
  views?: number | null;
  director?: string | null;
  cast?: string[];       
  watchlist?: string[];   
}


