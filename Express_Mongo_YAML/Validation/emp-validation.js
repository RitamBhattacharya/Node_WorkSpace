const Joi = require('joi');

const EmpCreateSchema = Joi.object({
    "_id": Joi.string(),
    "name": Joi.string().required(),
    "age": Joi.number().min(18).max(60).required(),
    "salary": Joi.number().required(),
    "job": Joi.string().required()
});

const EmpIdentificationSchema=Joi.object({
    "_id": Joi.string().required()
});

const EmpUpdateSchema=Joi.object({
    "name": Joi.string().required(),
    "age": Joi.number().min(18).max(60).required(),
    "salary": Joi.number().required(),
    "job": Joi.string().required()
});

const ValidateEmp={
    EmpCreateSchema:EmpCreateSchema,
    EmpIdentificationSchema:EmpIdentificationSchema,
    EmpUpdateSchema: EmpUpdateSchema
}

module.exports=ValidateEmp;