import New from '../models/New.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

import checkPermissions from '../utils/checkPermissions.js';
import mongoose from 'mongoose';

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
  const { id: newId } = req.params;
  const newPost = await New.findOne({ _id: newId });
  if (!newPost) {
    throw new NotFoundError(`No hay noticia con id ${newId}`);
  }
  checkPermissions(req.user, newPost.createdBy);
  await newPost.remove();
  res.status(StatusCodes.OK).json({ msg: 'Hecho! Noticia removida' });
};

const getAllNews = async (req, res) => {
  const news = await New.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ news, totalNews: news.length, numOfPages: 1 });
};
const updateNew = async (req, res) => {
  const { id: newId } = req.params;
  const { headline, description } = req.body;
  if (!headline || !description) {
    throw new BadRequestError('Por favor provea todos los valores');
  }
  const newPost = await New.findOne({ _id: newId });
  if (!newPost) {
    throw new NotFoundError(`No hay noticia con id ${newId}`);
  }

  checkPermissions(req.user, newPost.createdBy);

  const updateNew = await New.findOneAndUpdate({ _id: newId }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(StatusCodes.OK).json({ updateNew });
};

const showStats = async (req, res) => {
  let statsNewType = await New.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: { _id: '$newType', count: { $sum: 1 } },
    },
  ]);
  let statsStatus = await New.aggregate([
    { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: { _id: '$status', count: { $sum: 1 } },
    },
  ]);

  statsNewType = statsNewType.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  statsStatus = statsStatus.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultNewType = {
    otro: statsNewType.otro || 0,
    noticia: statsNewType.noticia || 0,
    informacion: statsNewType.informacion || 0,
    saludo: statsNewType.saludo || 0,
    articulo: statsNewType.articulo || 0,
    reseña: statsNewType.reseña || 0,
  };

  const defaultStatus = {
    pendiente: statsStatus.pendiente || 0,
    compartida: statsStatus.compartida || 0,
    caducada: statsStatus.caducada || 0,
    lista: statsStatus.lista || 0,
  };

  let monthlyNews = [];

  res
    .status(StatusCodes.OK)
    .json({ defaultNewType, defaultStatus, monthlyNews });
};

export { createNew, deleteNew, getAllNews, updateNew, showStats };
