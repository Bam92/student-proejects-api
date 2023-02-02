import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
const usersRoutes = Router();
const userCTRL = new UsersController();
usersRoutes.post("/register", userCTRL.register);
export default usersRoutes;
