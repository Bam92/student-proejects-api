import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";
const Category = sequelize.define("category", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});
export default Category;
