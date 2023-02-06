import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
const usersRoutes = Router();
const userCTRL = new UsersController();
usersRoutes.post("/register", userCTRL.register);
usersRoutes.get("/users", userCTRL.getAllUsers);
usersRoutes.get("/users/:id", userCTRL.getUserById);
export default usersRoutes;
