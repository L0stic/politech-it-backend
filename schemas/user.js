import Joi from 'joi';

export const userSchema = {
    userPOST: Joi.object().keys({
        login: Joi.string().min(6).max(100).required(),
        password: Joi.string().min(8).max(100).required(),
    }),

    userPUT: Joi.object().keys({
        password: Joi.string().min(8).max(100),
    })
};
