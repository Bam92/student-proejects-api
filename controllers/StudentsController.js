import Student from "../models/Student.js";
import { addStudentValidation } from "../utils/validations.js";

export default class StudentController {
    async createStudent(req, res) {
        const { error } = addStudentValidation(req.body);
        if (error) {
            return res.status(400).json({
                statusCode: 400,
                error: error.details[0].message,
            });
        }
        try {
            const student = await Student.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (student) {
                return res.status(409).json({
                    statusCode: 409,
                    error: `student already exist`,
                });
            }
            await Student.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                status: req.body.status ?? "active",
            });
            return res.status(201).json({
                statusCode: 201,
                message: "Student created whit success",
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                error: error.message,
            });
        }
    }

    async getAllStudents(req, res) {
        try {
            const students = await Student.findAll();
            return res.status(200).json({
                statusCode: 200,
                students,
            });
        } catch (error) {
            return res.status(500).json({
                statusCode: 500,
                error: error.message,
            });
        }
    }

    async getStudentById(req, res) {
        const studentId = req.params.id;
        try {
            if (!studentId) {
                return res
                    .status(400)
                    .json({ status: 400, error: "id not provided" });
            }
            const student = await Student.findByPk(req.params.id);
            return res.status(200).json({
                statusCode: 200,
                student,
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
