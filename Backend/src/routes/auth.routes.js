import express from 'express';
import {login,signup,onboard,logout} from '../controllers/auth.controller.js';
import { protectRoute } from '../middleware/auth.protectRoute.js';
const router = express.Router();


router.post("/signup", signup);

router.post("/login",login);
    
router.get("/logout",logout);

router.post("/onboarding",protectRoute,onboard)

//it is used to get the user data from the database
router.get("/me", protectRoute, async (req, res) => {
    res.status(200).json({ sucess: true, user: req.user });
});

export default router;