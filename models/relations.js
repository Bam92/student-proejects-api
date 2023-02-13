import Project from "./Project.js";
import Student from "./Student.js";
import Post from "./Post.js";
import User from "./User.js";
import Category from "./Category.js";
import PostCategory from "./PostCategory.js";

export default async function () {
    Project.belongsTo(Student, {});
    Student.hasMany(Project);

    Post.belongsTo(Student, {});
    Post.belongsTo(User, {});

    Category.belongsToMany(Post, {
        through: PostCategory,
        as: "PostCategory",
    });
    Post.belongsToMany(Category, {
        through: PostCategory,
        as: "PostCategory",
    });
}
