import { dbConnect } from '@/lib/database';
import Movie from '@/models/Movie';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();
  const { id } = req.query;
  console.log(id);

  if (req.method === 'GET') {
    const movie = await Movie.findById(id);
    return res.status(200).json(movie);
  }

  if (req.method === 'PUT') {
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(movie);
  }

  if (req.method === 'DELETE') {
    await Movie.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
