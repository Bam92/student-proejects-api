import dotenv from "dotenv";
import express from "express";
import usersRoutes from "./routes/users.routes.js";
import { BASE_API } from "./utils/constants.js";
dotenv.config();
const app = express();
app.use(BASE_API + "/auth", usersRoutes);
export default app;
