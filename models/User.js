import mongoose from 'mongoose';
import validator from 'validator';
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

UserSchema.pre('save', function () {
  console.log(this.password);
});

export default mongoose.model('User', UserSchema);
