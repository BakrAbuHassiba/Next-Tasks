
export async function getMovies() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/movies`);
  const data = await res.json();
  return data.movies; 
}

export async function getMovieById(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${id}`
  );
  const data = await res.json();
  return data;
}
