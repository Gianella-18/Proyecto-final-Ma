import express from "express";
import Carrito from "../models/carrito.js";

const router = express.Router();

// Agregar producto al carrito (no duplicar)
router.post("/agregar", async (req, res) => {
  const { userId, productoId } = req.body;

  try {
    let carrito = await Carrito.findOne({ usuario: userId });

    if (!carrito) {
      carrito = new Carrito({ usuario: userId, productos: [] });
    }

    await carrito.agregarProducto(productoId);
    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener carrito de un usuario
router.get("/:userId", async (req, res) => {
  try {
    const carrito = await Carrito.findOne({ usuario: req.params.userId }).populate("productos.producto");
    res.json(carrito || { productos: [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
