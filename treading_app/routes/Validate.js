const joi = require("joi");

const register_validation = (data) => {
  const schema = joi.object({
    username: joi.string().min(6).max(20).required(),
    password: joi.string().min(6).max(200).required(),
    email: joi.string().email().min(6).max(200).required(),
  });

  return schema.validate(data);
};

const login_validation = (data) => {
  const schema = joi.object({
    username: joi.string().min(6).max(20).required(),
    password: joi.string().min(6).max(200).required(),
  });
  return schema.validate();
};

module.exports.register = register_validation;
module.exports.login = login_validation;
