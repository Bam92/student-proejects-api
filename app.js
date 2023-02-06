import dotenv from "dotenv";
import express from "express";
import usersRoutes from "./routes/users.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import { BASE_API } from "./utils/constants.js";
import { connectDB } from "./config/dbConfig.js";
import buildRelation from "./models/relations.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(BASE_API + "/auth", usersRoutes);
app.use(BASE_API + "/students", studentsRoutes);

connectDB();

await buildRelation();

export default app;
