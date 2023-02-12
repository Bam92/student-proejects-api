import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

const Post = sequelize.define("post", {
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
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});
export default Post;
