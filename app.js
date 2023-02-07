import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/dbConfig.js";
import buildRelation from "./models/relations.js";
import projectsRouter from "./routes/projects.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import usersRoutes from "./routes/users.routes.js";
import { BASE_API } from "./utils/constants.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(BASE_API + "/auth", usersRoutes);

app.use(BASE_API + "/projects", projectsRouter);
app.use(BASE_API + "/students", studentsRoutes);

connectDB();

await buildRelation();

export default app;
