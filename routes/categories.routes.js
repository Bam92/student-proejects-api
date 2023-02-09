import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController.js";

const categoriesRouter = Router();
const categoriesCTRL = new CategoriesController();
categoriesRouter.get("/", categoriesCTRL.getAll);
categoriesRouter.get("/:id", categoriesCTRL.getOne);
categoriesRouter.post("/add", categoriesCTRL.addCategory);

export default categoriesRouter;
