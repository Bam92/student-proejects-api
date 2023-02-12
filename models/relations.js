import Project from "./Project.js";
import Student from "./Student.js";
import Post from "./Post.js";
import User from "./User.js";
import Category from "./Category.js";

export default async function () {
    Project.belongsTo(Student, {});
    Student.hasMany(Project);

    Post.belongsTo(Student, {});
    Post.belongsTo(User, {});

    Category.belongsTo(Post, {});
    Post.hasMany(Category, {});
}
