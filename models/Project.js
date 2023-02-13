import { DataTypes } from "sequelize";

import { sequelize } from "../config/dbConfig.js";

const projectSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    previewLink: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    githubLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publish: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active",
    },
};

const Project = sequelize.define("project", projectSchema);

export default Project;
