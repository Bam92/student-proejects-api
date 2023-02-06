import Project from "../models/Project.js";
import Student from "../models/Student.js";

export default async function () {
    Project.belongsTo(Student, {});
    Student.hasMany(Project);
}
