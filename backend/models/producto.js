import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  precio: {
    type: Number,
    required: true
  },
  imagen: {
    type: String,
    required: true
  },
  categoria: {
    type: String,
    enum: ["Ropa / Calzado", "Lactancia", "Porteo", "Cochecitos / Accesorios", "Cunas", "Mecedoras", "Diversión", "Sillitas de comer"],
    default: "Ropa / Calzado"
  },
  publicadoPor: {
    type: String,
    default: "Martina"
  }
}, { timestamps: true });

export default mongoose.model("Producto", productoSchema);
