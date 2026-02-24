import express from "express";
import { protect, admin } from "../middleware/authMiddleware";
import { studentsData, userData, levelData } from "../controllers/data-controller";

const router = express.Router();

router.route("/students").get(protect, studentsData);
router.route("/students-level").get(protect, admin, levelData);
router.route("/users").get(protect, admin, userData);

export default router;
