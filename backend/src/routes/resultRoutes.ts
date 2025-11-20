import express from "express";
import { protect, admin } from "../middleware/authMiddleware";
import {
  createResult,
  getResult,
  getResults,
  getStudentResults,
  updateResult,
  deleteResult,
  updateResultPayment,
  generatePositions,
  generateBroadsheet,
  addSubjectToResults,
  manualSubjectRemoval,
  exportResult,
  resultData,
  exportManyResults,
  studentResultData,
  removeSubjectFromStudentResult,
  AddSubjectToStudentResult,
} from "../controllers/resultController";

const router = express.Router();
router.route("/positions").post(protect, admin, generatePositions);
router.route("/broadsheet").post(protect, generateBroadsheet);
router.route("/payment").put(protect, admin, updateResultPayment);
router
  .route("/subjects")
  .put(protect, admin, manualSubjectRemoval)
  .post(protect, admin, addSubjectToResults);
router.route("/data").get(protect, admin, resultData);
router.route("/data/student-results").get(protect, studentResultData);
router.route("/pdf").get(protect, admin, exportManyResults);
router
  .route("/:id")
  .post(protect, createResult)
  .get(protect, getResult)
  .put(protect, updateResult)
  .delete(protect, deleteResult);
router
  .route("/student/:id")
  .get(protect, getStudentResults)
  .put(protect, removeSubjectFromStudentResult);
router
  .route("/student/:id/add")
  .put(protect, AddSubjectToStudentResult);
router.route("/pdf/:id").get(exportResult);

router.route("/").get(protect, getResults);

export default router;
