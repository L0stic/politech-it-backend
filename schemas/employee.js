import Joi from 'joi';

export const employeeSchema = {
    employeePOST: Joi.object().keys({
        first_name: Joi.string().min(1).max(100).required(),
        last_name: Joi.string().min(1).max(100).required(),
        // TODO: need update
        position_id: Joi.number().min(1).max(6).required(),
        birthday: Joi.date().required(),
        salary: Joi.number().min(0).integer().required(),
    }),

    employeePUT: Joi.object().keys({
        first_name: Joi.string().min(1).max(100),
        last_name: Joi.string().min(1).max(100),
        position_id: Joi.number().min(1).max(6),
        birthday: Joi.date(),
        salary: Joi.number().min(0).integer(),
    })
};
