import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    trim: true
  },
  portada: {
    type: String,
    required: true // URL o ruta de la imagen
  },
  link: {
    type: String,
    required: true // Link a video o recurso externo
  }
}, { timestamps: true });

export default mongoose.model("Post", postSchema);
