import User from "../models/User.js";
import { registerValidation } from "../utils/validations.js";

export default class UsersController {
    async register(req, res) {
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).json({
                statusCode: 400,
                errors: { ...error.details },
            });
        }
        try {
            const user = await User.findOne({
                where: { email: req.body.email },
            });
            if (user) {
                return res.status(409).json({
                    statusCode: 409,
                    error: "L'utilisateur existe déjà",
                });
            }
            console.log("New user");
            await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            });
            return res.status(201).json({
                statusCode: 201,
                errors: null,
                message: "Utilisateur créer avec succés",
            });
        } catch (error) {
            console.log(error);
            return res
                .status(500)
                .json({ statusCode: 500, error: error.message });
        }
    }
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.status(200).json(users || []);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
