import Project from "../models/Project.js";
import Alert from "../utils/Alert.js";

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
    async getOneProject(req, res) {}
}
