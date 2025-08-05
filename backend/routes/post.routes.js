import express from "express";
import Post from "./models/post.js";

const router = express.Router();

// Crear un nuevo post
router.post("/", async (req, res) => {
  try {
    const nuevoPost = new Post(req.body);
    await nuevoPost.save();
    res.status(201).json(nuevoPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todos los posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
