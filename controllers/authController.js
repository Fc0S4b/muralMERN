import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new BadRequestError('Por favor envíe todos los valores');
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email ya en uso');
  }
  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login');
};
const updateUser = async (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
