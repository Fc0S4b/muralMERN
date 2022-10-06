import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor escriba su nombre'],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Por favor escriba su email'],
    validate: {
      validator: validator.isEmail,
      message: 'Por favor escriba un email válido',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Por favor escriba una contraseña'],
    minlength: 6,
    select: false,
  },
  lastName: {
    type: String,
    maxlength: 20,
    trim: true,
    default: 'Apellido',
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: 'mi localidad',
  },
});

UserSchema.pre('save', async function () {
  // console.log('HOLAA', this.modifiedPaths()); //['name'] si es que se modifica name
  // console.log('CHAOO', this.isModified('name')); // true
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

export default mongoose.model('User', UserSchema);
