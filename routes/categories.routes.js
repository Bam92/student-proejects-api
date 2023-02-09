import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController.js";

const categoriesRouter = Router();
const categoriesCTRL = new CategoriesController();
categoriesRouter.post("/add", categoriesCTRL.addCategory);
categoriesRouter.post("/", categoriesCTRL.getAll);

export default categoriesRouter;
