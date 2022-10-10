import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connect.js';
import New from './models/New.js';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await New.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL(''), import.meta.url)
    );
    await New.create(jsonProducts);
    console.log('Hecho!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
