import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type MovieFormValues = {
  title: string;
  description?: string;
  image?: string;
  releaseYear?: number;
  duration?: number;
  genre?: string;
  rating?: number;
  views?: number;
  director?: string;
  cast?: string;
};

type MovieFormProps = {
  initialValues?: MovieFormValues & { _id?: string };
  type: 'create' | 'edit';
};

export default function MovieForm({ initialValues, type }: MovieFormProps) {
  const router = useRouter();
  const { register, handleSubmit } = useForm<MovieFormValues>({
    defaultValues: initialValues || {},
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: MovieFormValues) => {
    setLoading(true);

    const formattedData = {
      title: data.title,
      description: data.description || '',
      image: data.image || '',
      releaseYear: data.releaseYear || new Date().getFullYear(),
      duration: data.duration || 0,
      genre: data.genre ? data.genre.split(',').map((g) => g.trim()) : [],
      rating: data.rating || 0,
      views: data.views || 0,
      director: data.director || '',
      cast: data.cast ? data.cast.split(',').map((c) => c.trim()) : [],
    };

    const method = type === 'create' ? 'POST' : 'PUT';
    const url =
      type === 'create' ? '/api/movies' : `/api/movies/${initialValues?._id}`;

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedData),
      });

      if (!res.ok) {
        throw new Error('Failed to save movie');
      }

      router.push('/movies');
    } catch (err) {
      alert('Error saving movie');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
      <Input placeholder="Title" {...register('title', { required: true })} />
      <Input placeholder="Description" {...register('description')} />
      <Input placeholder="Image URL" {...register('image')} />
      <Input placeholder="Release Year" type="number" {...register('releaseYear')} />
      <Input placeholder="Duration (minutes)" type="number" {...register('duration')} />
      <Input placeholder="Genres (comma separated)" {...register('genre')} />
      <Input placeholder="Rating" type="number" step="0.1" {...register('rating')} />
      <Input placeholder="Views" type="number" {...register('views')} />
      <Input placeholder="Director" {...register('director')} />
      <Input placeholder="Cast (comma separated)" {...register('cast')} />

      <Button type="submit" disabled={loading}>
        {loading ? 'Saving...' : type === 'create' ? 'Add Movie' : 'Update Movie'}
      </Button>
    </form>
  );
}
