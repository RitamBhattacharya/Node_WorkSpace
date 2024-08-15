const Joi = require('joi');

const UserCreateSchema = Joi.object({
    "_id": Joi.number(),
    "username":Joi.string().required(),
    "userage": Joi.number().min(18).max(60).required(),
    "userjob": Joi.string().required()
});

const UserIdentificationSchema=Joi.object({
    "_id": Joi.number().required()
});

const UserUpdateSchema=Joi.object({
    "username":Joi.string().required(),
    "userage": Joi.number().min(18).max(60).required(),
    "userjob": Joi.string().required()
});

const ValidateUser={
    UserCreateSchema:UserCreateSchema,
    UserIdentificationSchema:UserIdentificationSchema,
    UserUpdateSchema:UserUpdateSchema
}

module.exports=ValidateUser;