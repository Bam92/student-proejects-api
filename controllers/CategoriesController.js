import Category from "../models/Category.js";
import Alert from "../utils/Alert.js";
import { addCategoryValidator } from "../utils/validations.js";

export default class CategoriesController {
    async addCategory(req, res) {
        const { body } = req;
        const alert = new Alert(req, res);
        const { error } = addCategoryValidator(body);
        console.log(error);
        if (error) {
            return alert.danger(error.details[0].message, 400);
        }
        try {
            const category = await Category.findOne({
                where: { title: body.title },
            });
            if (category) {
                return alert.danger("La categorie existe déjà", 409);
            }
            await Category.create(body);
            return alert.success("Categorie ajouter avec sujet", 201);
        } catch (err) {
            console.log(err);
            return alert.danger(error.message, 500);
        }
    }
    async getAll() {
        try {
            const categories = await Category.findAll();
            return res.status(200).json(categories || []);
        } catch (err) {
            const alert = new Alert(req, res);
            return alert.danger(err.message);
        }
    }
}
