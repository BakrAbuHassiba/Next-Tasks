import { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type MovieFormValues = {
  title: string;
  original_title?: string;
  image_url?: string;
  year?: number;
  runtime?: number;
  genres?: string;
  rating?: number;
  votes?: number;
  plot?: string;
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
      ...data,
      genres: data.genres ? data.genres.split(',').map((g) => g.trim()) : [],
    };

    const method = type === 'create' ? 'POST' : 'PUT';
    const url =
      type === 'create' ? '/api/movies' : `/api/movies/${initialValues?._id}`;

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData),
    });

    setLoading(false);

    if (!res.ok) {
      alert('Error saving movie');
      return;
    }

    router.push('/movies');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-xl mx-auto"
    >
      <Input placeholder="Title" {...register('title', { required: true })} />
      <Input placeholder="Original Title" {...register('original_title')} />
      <Input placeholder="Image URL" {...register('image_url')} />
      <Input placeholder="Year" type="number" {...register('year')} />
      <Input placeholder="Runtime" type="number" {...register('runtime')} />
      <Input placeholder="Genres (comma separated)" {...register('genres')} />
      <Input
        placeholder="Rating"
        type="number"
        step="0.1"
        {...register('rating')}
      />
      <Input placeholder="Votes" type="number" {...register('votes')} />

      <Textarea placeholder="Plot" {...register('plot')} />

      <Button type="submit" disabled={loading}>
        {loading
          ? 'Saving...'
          : type === 'create'
          ? 'Add Movie'
          : 'Update Movie'}
      </Button>
    </form>
  );
}
