import New from '../models/New.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createNew = async (req, res) => {
  const { headline, description } = req.body;
  if (!headline || !description) {
    throw new BadRequestError('Por favor provea todos los valores');
  }
  req.body.createdBy = req.user.userId;

  const newPost = await New.create(req.body);
  res.status(StatusCodes.CREATED).json({ newPost });
};
const deleteNew = async (req, res) => {
  return res.send('delete new');
};
const getAllNews = async (req, res) => {
  const news = await New.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ news, totalNews: news.length, numOfPages: 1 });
};
const updateNew = async (req, res) => {
  return res.send('update new');
};

const showStats = async (req, res) => {
  return res.send('show stats');
};

export { createNew, deleteNew, getAllNews, updateNew, showStats };
