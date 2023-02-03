import { hash } from "bcrypt";
import User from "../models/User.js";
import { registerValidation } from "../utils/validations.js";

export default class UsersController {
    async register(req, res) {
        const { error } = registerValidation(req.body);
        if (error) {
            return res.status(400).json({
                statusCode: 400,
                error: error.details[0].message,
            });
        }
        console.log(req.body);
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
            const password = await hash(req.body.password, 14);
            await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password,
            });
            return res.status(201).json({
                statusCode: 201,
                errors: null,
                message: "Utilisateur créer avec succés",
            });
        } catch (error) {
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
            return res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        const userId = req.params.id;
        try {
            if (!userId) {
                return res
                    .status(400)
                    .json({ status: 400, error: "id not provided" });
            }
            const user = await User.findByPk(req.params.id);
            return res.status(200).json(user.dataValues);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
