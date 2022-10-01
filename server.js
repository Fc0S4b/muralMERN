import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import connectDB from './db/connect.js';
import authRouter from './routes/authRoutes.js';
import newsRouter from './routes/newsRouter.js';

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/news', newsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
