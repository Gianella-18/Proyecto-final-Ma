import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  productos: [{
    producto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
      required: true
    },
    cantidad: {
      type: Number,
      default: 1
    }
  }]
}, { timestamps: true });

// Evita duplicados: si el producto ya existe, no lo agrega otra vez
carritoSchema.methods.agregarProducto = function (nuevoProductoId) {
  const productoExistente = this.productos.find(p =>
    p.producto.toString() === nuevoProductoId.toString()
  );
  if (productoExistente) {
    productoExistente.cantidad += 1;
  } else {
    this.productos.push({ producto: nuevoProductoId });
  }
  return this.save();
};

export default mongoose.model("Carrito", carritoSchema);
