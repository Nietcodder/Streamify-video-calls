import express from "express";
import { upsertStreamUser } from "../lib/stream.js";

const router = express.Router();

// Create or update user in Stream
router.post("/user", async (req, res) => {
  const { id, name } = req.body;
  try {
    const user = await upsertStreamUser({ id, name });
    res.json({ success: true, user });
  } catch (err) {
    console.error("Stream user error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
