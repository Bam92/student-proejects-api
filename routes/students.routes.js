import { Router } from "express";
import StudentController from "../controllers/StudentsController.js";

const router = Router();
const studentCTRL = new StudentController();

router.get("/", studentCTRL.getAllStudents);
router.post("", studentCTRL.createStudent);
router.get("/:id", studentCTRL.getStudentById);

export default router;
