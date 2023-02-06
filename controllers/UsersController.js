import { genSalt, hash } from "bcrypt";
import User from "../models/User.js";
import Alert from "../utils/Alert.js";
import { registerValidation } from "../utils/validations.js";

export default class UsersController {
    async register(req, res) {
        const alert = new Alert(req, res);
        const bodyRequest = req.body;
        // Validate user input(name, email, password)
        const { error } = registerValidation(bodyRequest);
        if (error) {
            alert.setOtherData({ message: error.details[0].message });
            return alert.danger(
                "Erreur survenus lors de l'enregistrement de l'utilisateur"
            );
        }

        // check if the email is already register
        const userExist = await User.findOne({
            where: { email: bodyRequest.email },
        });
        if (userExist) {
            return alert.danger("Utilisateur existe déjà", 400);
        }

        try {
            // hash the password
            const salt = await genSalt(14);
            const password = await hash(bodyRequest.password, salt);
            bodyRequest.password = password;
            // create a user objet and save in the DB
            await User.create(bodyRequest);
            return alert.success("Utilisateur enregister avec success", 201);
        } catch (error) {
            console.log(error);
            return alert.danger(error.message, 500);
        }
    }
    async login(req, res) {}
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
