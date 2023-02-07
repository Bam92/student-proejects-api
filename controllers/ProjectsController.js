import Project from "../models/Project.js";
import Alert from "../utils/Alert.js";
import { addProjectValidation } from "../utils/validations.js";

export default class ProjectsController {
    async getAllProjects(req, res) {
        try {
            const projects = await Project.findAll();
            return res.status(200).json(projects || []);
        } catch (error) {
            const alert = new Alert(req, res);
            return alert.danger(error.message, 500);
        }
    }
    async getOneProject(req, res) {
        const id = req.params.id;
        const alert = new Alert(req, res);
        try {
            const project = await Project.findByPk(id);
            if (project) {
                return res.status(200).json(project);
            }

            return alert.danger("Le projet est introuvable", 400);
        } catch (error) {
            console.log(error);
            return alert.danger(error.message, 500);
        }
    }
    async addProject(req, res) {
        const { body } = req;
        const alert = new Alert(req, res);
        const { error } = addProjectValidation(body);
        if (error) {
            return alert.danger(error.details[0].message);
        }
        try {
            const projectExist = await Project.findOne({
                where: { title: body.title, description: body.description },
            });
            if (projectExist) {
                return alert.danger("Le project existe déjà", 409);
            }
            body.tags = JSON.stringify(body.tags);
            await Project.create(body);
            return alert.success("Project ajouter avec succés", 201);
        } catch (error) {
            console.log(error);
            return alert.danger(error.message, 500);
        }
    }
}
