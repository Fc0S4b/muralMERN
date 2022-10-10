import mongoose from 'mongoose';
// status [pendiente,lista, compartida  ]
// tipo de noticia [saludo, información, noticia, reseña, artículo ,otro]
// localidad
// Títular
// descripcion
const NewSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: [true, 'Por favor provea un titular'],
      maxlength: 50,
    },
    description: {
      type: String,
      required: [true, 'Por favor provea una descripción'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ['pendiente', 'lista', 'compartida', 'caducada'],
      default: 'pendiente',
    },
    newType: {
      type: String,
      enum: ['saludo', 'información', 'noticia', 'reseña', 'artículo', 'otro'],
      default: 'información',
    },
    newLocation: {
      type: String,
      default: 'mi localidad',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Por favor provea un usuario'],
    },
    // newType later
  },
  { timestamps: true }
);

export default mongoose.model('New', NewSchema);
