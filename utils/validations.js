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
