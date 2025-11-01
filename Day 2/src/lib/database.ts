import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local');
}

export async function dbConnect(): Promise<typeof mongoose> {
  try {
    if (mongoose.connection.readyState !== 0) {
      return mongoose;
    }

    return await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to MongoDB');
  }
}
