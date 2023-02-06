import dotenv from "dotenv";
import { Sequelize } from "sequelize";
dotenv.config();
const dbURL = process.env.BD_URL;
const logging = () => (process.env.NODE_ENV === "development" ? true : false);
export const sequelize = new Sequelize(dbURL, { logging });
export function connectDB(app) {
    sequelize
        .sync() /* .sync({
        force: true,
    }) */
        .then(() => {
            const PORT = process.env.PORT || 3000;
            console.log(`DB connexion successfuly`);
            app.listen(PORT, () => {
                console.log(`Server is running at ${PORT}`);
            });
        })
        .catch((err) => {
            console.log(`DB connexion failed`, err.message, err.stack);
        });
}
