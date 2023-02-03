import Student from "../models/Student.js";
import Project from "../models/Project.js";

export default async function () {
    await Project.belongsTo(Student, {});
    await Student.hasMany(Project);
}
