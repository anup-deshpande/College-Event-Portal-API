// Validation
const Joi = require('@hapi/joi'); 

// SignUp Validation
const signUpValidation = (data) =>{
    const schema = Joi.object({
        name: Joi.string()
            .min(6).
            required(),
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required(),
        university: Joi.string()
            .required()
    });

return schema.validate(data);

};


// Login Validation
const loginValidation = (data) =>{
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .required()
});

return schema.validate(data);

};

// Get posts Validation
const getPostValidation = (data) =>{
    const schema = Joi.object({
        university: Joi.string()
            .required()
    });

    return schema.validate(data);
};

// Add New Post Validation 
const addPostValidation = (data) =>{
    const schema = Joi.object({
        title: Joi.string()
            .min(4)
            .required(),
        description: Joi.string()
});

return schema.validate(data);

};


module.exports.signUpValidation = signUpValidation;
module.exports.loginValidation  = loginValidation;
module.exports.addPostValidation  = addPostValidation;
module.exports.getPostValidation = getPostValidation;
