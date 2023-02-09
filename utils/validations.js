import Joi from "joi";

export const registerValidation = (data) => {
    const Schema = Joi.object({
        firstName: Joi.string().min(2).max(255).required(),
        lastName: Joi.string().min(2).max(255).required(),
        email: Joi.string().min(5).max(255).email().required(),
        password: Joi.string().min(4).max(255).required(),
    });
    return Schema.validate(data);
};
export const addStudentValidation = (data) => {
    const Schema = Joi.object({
        firstName: Joi.string().min(3).max(255).required(),
        lastName: Joi.string().min(3),
        email: Joi.string().min(5).email().required(),
        status: Joi.string(),
    });
    return Schema.validate(data);
};

export const addProjectValidation = (data) => {
    const Schema = Joi.object({
        title: Joi.string().min(3).max(200).required(),
        description: Joi.string().min(3).max(255).required(),
        tags: Joi.array().min(1).required(),
        previewLink: Joi.string().min(10).required(),
        githubLink: Joi.string().min(5),
        publish: Joi.string(),
        StudentId: Joi.string().min(3).max(255).required(),
    });
    return Schema.validate(data);
};
export const addCategoryValidator = (data) => {
    const Schema = Joi.object({
        title: Joi.string().min(2).max(255).required(),
    });
    return Schema.validate(data);
};
