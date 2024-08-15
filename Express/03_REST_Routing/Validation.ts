import Joi from "joi";

function ValidateParam(obj:any):any{
    const schema:any=Joi.object({
        id:Joi.number().min(1).required()
    });
    return schema.validate(obj);
}

function ValidateBody(obj:any):any{
    const schema:any=Joi.object({
        name:Joi.string().min(3).required(),
        rank:Joi.string().min(2).required()
    });
    return schema.validate(obj);
}

const validate:any={
    ValidateParam:ValidateParam,
    ValidateBody:ValidateBody
}

export default validate;