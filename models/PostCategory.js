import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbConfig.js";

const PostCategory = sequelize.define("postCategory", {});
export default PostCategory;
