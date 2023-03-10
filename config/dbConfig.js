import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();
const dbURL = process.env.BD_URL;
const logging = () => (process.env.NODE_ENV === "development" ? true : false);
export const sequelize = new Sequelize(dbURL, { logging });

export function connectDB(app) {
    sequelize
        .sync({ alter: true })
        .then(() => {
            console.log(`DB connexion successfuly`);
        })
        .catch((err) => {
            console.error(`DB connexion failed`, err.message, err.stack);
        });
}
