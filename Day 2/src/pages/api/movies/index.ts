import { dbConnect } from '@/lib/database';
import Movie from '@/models/Movie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === 'GET') {
    const movies = await Movie.find({}).sort({ createdAt: -1 });
    return res.status(200).json(movies);
  }

  if (req.method === 'POST') {
    const movie = await Movie.create(req.body);
    return res.status(201).json(movie);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
