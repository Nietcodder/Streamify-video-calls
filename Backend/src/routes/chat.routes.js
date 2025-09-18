import express from "express";
import { protectRoute } from "../middleware/auth.protectRoute.js";
import { getStreamToken } from "../controllers/chat.controller.js";
//import { upsertStreamUser } from "../lib/stream.js";
const router = express.Router();

router.get("/token", protectRoute, getStreamToken);

//router.post("/upsert-user", protectRoute, upsertUser);
export default router;